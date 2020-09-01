package com.MJ.MotoFreaksBackend.MotoFreaksBackend.services;

import com.MJ.MotoFreaksBackend.MotoFreaksBackend.db.collections.User;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.models.Address;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.models.CarDataModel;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.repository.UserRepository;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.resource.response.ProfileModel;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.security.configs.JwtTokenProvider;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@Slf4j
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtTokenProvider jwtService;

    public Object addCar(String token, CarDataModel car) {
        Map<Object, Object> model = new HashMap<>();
        Optional<User> optionalUser = userRepository.findByEmailOptional(jwtService.getUsername(token));
        User currentUser = optionalUser.orElseThrow(() -> new UsernameNotFoundException("User not found"));
        if (Objects.isNull(currentUser.getCarsList())) {
            List<CarDataModel> newCarList = new ArrayList<>();
            newCarList.add(car);
            currentUser.setCarsList(newCarList);
        } else {
            currentUser.getCarsList().add(car);
        }
        userRepository.save(currentUser);
        model.put("message", "Car " + car.getName() + " added to " + currentUser.getEmail() + " user.");
        log.info("Car " + car.getName() + " added to " + currentUser.getId() + " user.");
        return new ResponseEntity<>(model, HttpStatus.OK);
    }

    public Object mergeAddress(String token, Address address) {
        Map<Object, Object> model = new HashMap<>();
        Optional<User> optionalUser = userRepository.findByEmailOptional(jwtService.getUsername(token));
        User currentUser = optionalUser.orElseThrow(() -> new UsernameNotFoundException("User not found"));
        currentUser.setAddress(address);
        userRepository.save(currentUser);
        model.put("message", "Address was merged for " + currentUser.getEmail() + " user.");
        log.info("Address was merged for " + currentUser.getId() + " user.");
        return new ResponseEntity<>(model, HttpStatus.OK);
    }

    public Object addFriend(String token, String friendEmail) {
        Map<Object, Object> model = new HashMap<>();
        Optional<User> optionalUser = userRepository.findByEmailOptional(jwtService.getUsername(token));
        User currentUser = optionalUser.orElseThrow(() -> new UsernameNotFoundException("User not found"));
        Optional<User> optionalUserFriend = userRepository.findByEmailOptional(friendEmail);
        User userFriend = optionalUserFriend.orElseThrow(() -> new UsernameNotFoundException("User not found"));

        if (Objects.isNull(currentUser.getFriendsEmails())) {
            List<String> newFriends = new ArrayList<>();
            newFriends.add(userFriend.getEmail());
            currentUser.setFriendsEmails(newFriends);
        } else {
            currentUser.getFriendsEmails().add(userFriend.getEmail());
        }
        userRepository.save(currentUser);
        model.put("message", "Friend " + userFriend.getEmail() + " added to " + currentUser.getEmail() + " user.");
        log.info("Friend " + userFriend.getId() + " added to " + currentUser.getId() + " user.");
        return new ResponseEntity<>(model, HttpStatus.OK);
    }

    public Object getProfile(String email, String currentToken) {
        ProfileModel profile = new ProfileModel();

        return new ResponseEntity<>(profile, HttpStatus.OK);
    }

}
