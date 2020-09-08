package com.MJ.MotoFreaksBackend.MotoFreaksBackend.security.services;

import com.MJ.MotoFreaksBackend.MotoFreaksBackend.db.collections.User;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.db.collections.UserRoles;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.enums.Role;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.repository.UserRepository;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.security.configs.JwtTokenProvider;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.security.consts.AuthorizationHeader;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.security.request.AuthBody;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.security.request.RegisterBody;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.services.RoleService;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.services.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.*;

import static org.springframework.http.ResponseEntity.ok;

@Service
@Slf4j
public class CustomUserDetailsService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Qualifier("authenticationManagerBean")
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    JwtTokenProvider jwtTokenProvider;

    @Autowired
    private PasswordEncoder bCryptPasswordEncoder;

    @Autowired
    private UserService userService;

    @Autowired
    private RoleService roleService;

    public Object loginUser(AuthBody data) {
        String username = data.getUserName();
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, data.getPassword()));
        User currentUser = userService.getUserByUserName(username);
        String token = jwtTokenProvider.createToken(username, currentUser.getUserRoles());
        addLoginHistory(currentUser);
        Map<Object, Object> model = new HashMap<>();
        model.put("username", username);
        model.put("token", AuthorizationHeader.TOKEN_PREFIX + token);
        log.info("User " + currentUser.getId() + " was logged correctly.");
        return ok(model);
    }

    public Object registerUser(RegisterBody data, Role role) {
        Map<Object, Object> model = new HashMap<>();
        try {
            userService.getUserByUserName(data.getUserName());
            model.put("message", "User with " + data.getUserName() + " is already exists!");
            log.warn("Cannot register user: " + data.getUserName() + ". User is already exists");
            return new ResponseEntity<Object>(model, HttpStatus.NOT_FOUND);
        } catch (ResponseStatusException e) {
            saveNewUser(data, role);
            model.put("message", "User registered successfully");
            log.info("User " + data.getUserName() + " was register correctly.");
            return ok(model);
        }
    }

    public void saveNewUser(RegisterBody user, Role role) {
        User newUser = new User();
        newUser.setUserName(user.getUserName());
        newUser.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        newUser.setEnabled(true);
        newUser.setName(user.getName());
        newUser.setLastName(user.getLastName());
        newUser.setCreatedDate(new Date());
        newUser.setPoints(0);
        UserRoles userUserRoles = roleService.getRoleByName(role);
        newUser.setUserRoles(new HashSet<>(Arrays.asList(userUserRoles)));
        userRepository.save(newUser);
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userService.getUserByUserName(email);
        List<GrantedAuthority> authorities = getUserAuthority(user.getUserRoles());
        return buildUserForAuthentication(user, authorities);
    }

    private List<GrantedAuthority> getUserAuthority(Set<UserRoles> userRoles) {
        Set<GrantedAuthority> roles = new HashSet<>();
        userRoles.forEach((role) -> {
            roles.add(new SimpleGrantedAuthority(role.getRole().toString()));
        });

        List<GrantedAuthority> grantedAuthorities = new ArrayList<>(roles);
        return grantedAuthorities;
    }

    private UserDetails buildUserForAuthentication(User user, List<GrantedAuthority> authorities) {
        return new org.springframework.security.core.userdetails.User(user.getUserName(), user.getPassword(), authorities);
    }

    public Object addRole(String username, Role role) {
        Map<Object, Object> model = new HashMap<>();
        User userExists = userService.getUserByUserName(username);
        model.put("userEmail:", username);
        if (role == Role.ADMIN) {
            userExists.getUserRoles().add(this.roleService.getRoleByName(Role.MODERATOR));
            model.put("newRole", Role.MODERATOR.toString());
            log.info("Added " + Role.MODERATOR + " role to " + username + " user.");
        }
        userExists.getUserRoles().add(this.roleService.getRoleByName(role));
        model.put("newRole", role);
        this.userRepository.save(userExists);
        log.info("Added " + role + " role to " + username + " user.");
        return ok(model);
    }

    public void addLoginHistory(User currentUser) {
        Date currentDate = new Date();
        if (Objects.isNull(currentUser.getLoginsHistory())) {
            List<Date> historyLogins = new ArrayList<>();
            historyLogins.add(currentDate);
            currentUser.setLoginsHistory(historyLogins);
        } else {
            currentUser.getLoginsHistory().add(currentDate);
        }
        userRepository.save(currentUser);
    }
}
