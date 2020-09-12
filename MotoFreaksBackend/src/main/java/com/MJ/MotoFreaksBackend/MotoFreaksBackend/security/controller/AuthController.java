package com.MJ.MotoFreaksBackend.MotoFreaksBackend.security.controller;

import com.MJ.MotoFreaksBackend.MotoFreaksBackend.enums.Role;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.security.request.AuthBody;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.security.request.RegisterBody;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.security.services.AuthUserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "*")
@RestController
@Slf4j
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthUserService customUserAuthService;

    @Autowired
    public AuthController(AuthUserService customUserAuthService) {
        this.customUserAuthService = customUserAuthService;
    }

    @PostMapping("/login")
    public Object login(@RequestBody AuthBody data) {
        return customUserAuthService.loginUser(data);
    }

    @PostMapping("/register")
    public Object register(@RequestBody RegisterBody user) {
        return customUserAuthService.registerUser(user, Role.USER);
    }

    @PostMapping("/set-role/moderator/{username}")
    public Object addModeratorRole(@PathVariable String username) {
        return customUserAuthService.addRole(username, Role.MODERATOR);
    }

    @PostMapping("/set-role/admin/{username}")
    public Object addAdminRole(@PathVariable String username) {
        return customUserAuthService.addRole(username, Role.ADMIN);
    }
}
