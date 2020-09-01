package com.MJ.MotoFreaksBackend.MotoFreaksBackend.resource.controller;

import com.MJ.MotoFreaksBackend.MotoFreaksBackend.models.Address;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.models.CarDataModel;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.security.consts.AuthorizationHeader;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.services.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/user")
@Slf4j
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping(path = "/merge/address", method = RequestMethod.POST, produces = "application/json")
    public Object addAddress(HttpServletRequest req, @RequestBody Address address) {
        String token = req.getHeader(AuthorizationHeader.HEADER_NAME).replace(AuthorizationHeader.TOKEN_PREFIX, "");
        return userService.mergeAddress(token, address);
    }

    @RequestMapping(path = "/add/car", method = RequestMethod.POST, produces = "application/json")
    public Object addCar(HttpServletRequest req, @RequestBody CarDataModel car) {
        String token = req.getHeader(AuthorizationHeader.HEADER_NAME).replace(AuthorizationHeader.TOKEN_PREFIX, "");
        return userService.addCar(token, car);
    }


    @RequestMapping(path = "/add/friend/{friendEmail}", method = RequestMethod.POST, produces = "application/json")
    public Object addFriend(HttpServletRequest req, @PathVariable("friendEmail") String friendEmail) {
        String token = req.getHeader(AuthorizationHeader.HEADER_NAME).replace(AuthorizationHeader.TOKEN_PREFIX, "");
        return userService.addFriend(token, friendEmail);
    }


    @RequestMapping(path = "/show/profile/{email}", method = RequestMethod.GET, produces = "application/json")
    public Object showProfile(@PathVariable("email") String email, HttpServletRequest req) {
        String token = req.getHeader(AuthorizationHeader.HEADER_NAME).replace(AuthorizationHeader.TOKEN_PREFIX, "");
        return userService.getProfile(email, token);
    }
}

