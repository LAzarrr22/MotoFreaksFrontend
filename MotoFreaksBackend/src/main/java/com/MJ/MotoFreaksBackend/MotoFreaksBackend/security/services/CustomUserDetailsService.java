package com.MJ.MotoFreaksBackend.MotoFreaksBackend.security.services;

import com.MJ.MotoFreaksBackend.MotoFreaksBackend.db.collections.UserRoles;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.db.collections.User;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.enums.Role;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.models.Account;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.repository.RoleRepository;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.repository.UserRepository;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.security.request.RegisterBody;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.*;

@Service
@Slf4j
public class CustomUserDetailsService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder bCryptPasswordEncoder;

    public User findUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public void saveNewUser(RegisterBody user, Role role) {
        User newUser = new User();
        newUser.setEmail(user.getEmail());
        newUser.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        newUser.setEnabled(true);
        newUser.setName(user.getName());
        newUser.setCreatedDate(new Date());
        UserRoles userUserRoles = roleRepository.findByRole(role);
        newUser.setUserRoles(new HashSet<>(Arrays.asList(userUserRoles)));
        userRepository.save(newUser);
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

        User user = userRepository.findByEmail(email);
        if (user != null) {
            List<GrantedAuthority> authorities = getUserAuthority(user.getUserRoles());
            return buildUserForAuthentication(user, authorities);
        } else {
            throw new UsernameNotFoundException("username not found");
        }
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
        return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(), authorities);
    }

    public void addRole(User userExists, Role role) {
        log.error(userExists.toString());
        userExists.getUserRoles().add(roleRepository.findByRole(role));
        this.userRepository.save(userExists);
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
