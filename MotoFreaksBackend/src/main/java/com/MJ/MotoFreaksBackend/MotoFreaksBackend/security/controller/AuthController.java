package com.MJ.MotoFreaksBackend.MotoFreaksBackend.security.controller;

import com.MJ.MotoFreaksBackend.MotoFreaksBackend.enums.Role;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.security.request.AuthBody;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.security.request.RegisterBody;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.security.services.CustomUserDetailsService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "*")
@RestController
@Slf4j
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private CustomUserDetailsService customUserAuthService;

    @PostMapping("/login")
    public Object login(@RequestBody AuthBody data) {
        return customUserAuthService.loginUser(data);
    }

    @PostMapping("/register")
    public Object register(@RequestBody RegisterBody user) {
        return customUserAuthService.registerUser(user, Role.USER);
    }

    @PostMapping("/set-role/moderator/{userEmail}")
    public Object addModeratorRole(@PathVariable String userEmail) {
        return customUserAuthService.addRole(userEmail, Role.MODERATOR);
    }

    @PostMapping("/set-role/admin/{userEmail}")
    public Object addAdminRole(@PathVariable String userEmail) {
        return customUserAuthService.addRole(userEmail, Role.ADMIN);
    }
}
