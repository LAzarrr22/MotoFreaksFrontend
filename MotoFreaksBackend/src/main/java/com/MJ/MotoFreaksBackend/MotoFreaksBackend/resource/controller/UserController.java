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


    @RequestMapping(path = "/{email}/add/address", method = RequestMethod.POST)
    public void addAddress(@RequestBody Address address, @PathVariable("email") String email) {

    }

    @RequestMapping(path = "/{email}/add/car", method = RequestMethod.POST)
    public Object addCar(@RequestBody CarModel car, @PathVariable("email") String email) {
        Map<Object, Object> model = new HashMap<>();
log.error(email);
log.error(car.getName());
        return userService.addCar(email, car);
    }
}

