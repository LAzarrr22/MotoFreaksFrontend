package com.MJ.MotoFreaksBackend.MotoFreaksBackend.resource.controller;

import com.MJ.MotoFreaksBackend.MotoFreaksBackend.models.Address;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.models.CarModel;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.services.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/user")
@Slf4j
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping(path = "/{id}/merge/address", method = RequestMethod.POST)
    public Object addAddress(@RequestBody Address address, @PathVariable("id") String id) {
        return userService.mergeAddress(id, address);
    }

    @RequestMapping(path = "/{id}/add/car", method = RequestMethod.POST)
    public Object addCar(@RequestBody CarModel car, @PathVariable("id") String id) {
        return userService.addCar(id, car);
    }


    @RequestMapping(path = "/{id}/add/friend/{friendId}", method = RequestMethod.POST)
    public Object addFriend(@RequestBody CarModel car, @PathVariable("id") String id, @PathVariable("friendId") String friendId) {
        return userService.addFriend(id, friendId, car);
    }


    @RequestMapping(path = "/show/profile/{id}", method = RequestMethod.GET)
    public Object showProfile(@RequestBody CarModel car, @PathVariable("id") String id, @PathVariable("friendid") String friendid) {
        return userService.addFriend(id, friendid, car);
    }
}

