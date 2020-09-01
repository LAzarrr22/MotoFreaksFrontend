package com.MJ.MotoFreaksBackend.MotoFreaksBackend.services;

import com.MJ.MotoFreaksBackend.MotoFreaksBackend.db.collections.User;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.models.Address;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.models.CarModel;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@Slf4j
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public Object addCar(String id, CarModel car) {
        Map<Object, Object> model = new HashMap<>();
        Optional<User> optionalUser = userRepository.findById(id);
        User existUser = optionalUser.orElseThrow(RuntimeException::new);//todo our exception
        if (Objects.isNull(existUser.getCarsList())) {
            List<CarModel> newCarList = new ArrayList<>();
            newCarList.add(car);
            existUser.setCarsList(newCarList);
        } else {
            existUser.getCarsList().add(car);
        }
        userRepository.save(existUser);
        model.put("message", "Car " + car.getName() + " added to " + existUser.getId() + " user.");
        log.info("Car " + car.getName() + " added to " + existUser.getId() + " user.");
        return new ResponseEntity<>(model, HttpStatus.OK);
    }

    public Object mergeAddress(String id, Address address) {
        Map<Object, Object> model = new HashMap<>();
        Optional<User> optionalUser = userRepository.findById(id);
        User existUser = optionalUser.orElseThrow(RuntimeException::new);//todo our exception
        existUser.setAddress(address);
        userRepository.save(existUser);
        model.put("message", "Address was merged for " + existUser.getId() + " user.");
        log.info("Address was merged for " + existUser.getId() + " user.");
        return new ResponseEntity<>(model, HttpStatus.OK);
    }

    public Object addFriend(String id, String friendId, CarModel car) {
        Map<Object, Object> model = new HashMap<>();
        Optional<User> optionalUser = userRepository.findById(id);
        User existUser = optionalUser.orElseThrow(RuntimeException::new);//todo our exception

        if (Objects.isNull(existUser.getFriendIdList())) {

        }
        return new ResponseEntity<>(model, HttpStatus.OK);
    }
}
