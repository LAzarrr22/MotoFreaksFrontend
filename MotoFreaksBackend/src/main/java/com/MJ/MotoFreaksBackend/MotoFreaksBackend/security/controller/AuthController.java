package com.MJ.MotoFreaksBackend.MotoFreaksBackend.security.controller;

import static org.springframework.http.ResponseEntity.ok;

import java.util.HashMap;
import java.util.Map;

import com.MJ.MotoFreaksBackend.MotoFreaksBackend.db.collections.User;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.enums.Role;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.security.configs.JwtTokenProvider;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.security.request.AuthBody;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.security.request.RegisterBody;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.security.services.CustomUserDetailsService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "*")
@RestController
@Slf4j
@RequestMapping("/api/auth")
public class AuthController {

    @Qualifier("authenticationManagerBean")
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    JwtTokenProvider jwtTokenProvider;

    @Autowired
    private CustomUserDetailsService userService;

    @SuppressWarnings("rawtypes")
    @PostMapping("/login")
    public ResponseEntity login(@RequestBody AuthBody data) {
        try {
            String username = data.getEmail();
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, data.getPassword()));
            String token = jwtTokenProvider.createToken(username, userService.findUserByEmail(username).getUserRoles());
            Map<Object, Object> model = new HashMap<>();
            model.put("username", username);
            model.put("token", "Bearer " + token);
            return ok(model);
        } catch (AuthenticationException e) {
            throw new BadCredentialsException("Invalid email/password supplied");
        }
    }

    @SuppressWarnings("rawtypes")
    @PostMapping("/register")
    public ResponseEntity register(@RequestBody RegisterBody user) {
        User userExists = userService.findUserByEmail(user.getEmail());
        if (userExists != null) {
            throw new BadCredentialsException("User with username: " + user.getEmail() + " already exists");
        }
        userService.saveUser(user, Role.USER);
        Map<Object, Object> model = new HashMap<>();
        model.put("message", "User registered successfully");
        return ok(model);
    }

    @PostMapping("/set-role/moderator/{userEmail}")
    public ResponseEntity addModeratorRole(@PathVariable String userEmail) {
        User userExists = userService.findUserByEmail(userEmail);
        if (userExists != null) {
            userService.addRole(userExists, Role.MODERATOR);
        }
        Map<Object, Object> model = new HashMap<>();
        model.put("userEmail:", userEmail);
        model.put("newRole", Role.MODERATOR);
        return ok(model);
    }

    @PostMapping("/set-role/admin/{userEmail}")
    public ResponseEntity addAdminRole(@PathVariable String userEmail) {
        User userExists = userService.findUserByEmail(userEmail);
        if (userExists != null) {
            userService.addRole(userExists, Role.ADMIN);
        }
        Map<Object, Object> model = new HashMap<>();
        model.put("userEmail:", userEmail);
        model.put("newRole", Role.ADMIN);
        return ok(model);
    }
}
