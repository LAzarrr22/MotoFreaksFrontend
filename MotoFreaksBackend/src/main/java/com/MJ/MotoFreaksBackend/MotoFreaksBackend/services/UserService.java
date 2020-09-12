package com.MJ.MotoFreaksBackend.MotoFreaksBackend.services;

import com.MJ.MotoFreaksBackend.MotoFreaksBackend.db.collections.User;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.models.Address;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.models.CarDataModel;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.models.Contact;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.repository.UserRepository;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.resource.response.ProfileModelDto;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.security.configs.JwtTokenProvider;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.*;

import static org.springframework.http.ResponseEntity.ok;

@Service
@Slf4j
public class UserService {

    private final UserRepository userRepository;
    private final JwtTokenProvider jwtService;

    @Autowired
    public UserService(UserRepository userRepository, JwtTokenProvider jwtService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }


    public Object addCar(String token, CarDataModel car) {
        Map<Object, Object> model = new HashMap<>();
        User currentUser = getUserByToken(token);
        if (Objects.isNull(currentUser.getCarsList())) {
            List<CarDataModel> newCarList = new ArrayList<>();
            newCarList.add(car);
            currentUser.setCarsList(newCarList);
        } else {
            currentUser.getCarsList().add(car);
        }
        currentUser.setUpdatedDate(new Date());
        userRepository.save(currentUser);
        model.put("message", "Car " + car.getName() + " added to " + currentUser.getUserName() + " user.");
        log.info("Car " + car.getName() + " added to " + currentUser.getId() + " user.");
        return ok(model);
    }

    public Object mergeAddress(String token, Address address) {
        Map<Object, Object> model = new HashMap<>();
        User currentUser = getUserByToken(token);
        currentUser.setAddress(address);
        currentUser.setUpdatedDate(new Date());
        userRepository.save(currentUser);
        model.put("message", "Address was merged for " + currentUser.getUserName() + " user.");
        log.info("Address was merged for " + currentUser.getId() + " user.");
        return ok(model);
    }

    public Object mergeContact(String token, Contact contact) {
        Map<Object, Object> model = new HashMap<>();
        User currentUser = getUserByToken(token);
        currentUser.setContact(contact);
        currentUser.setUpdatedDate(new Date());
        userRepository.save(currentUser);
        model.put("message", "Contacts was merged for " + currentUser.getUserName() + " user.");
        log.info("Contacts was merged for " + currentUser.getId() + " user.");
        return ok(model);
    }

    public Object addFriend(String token, String friendUsername) {
        Map<Object, Object> model = new HashMap<>();
        User currentUser = getUserByToken(token);
        User userFriend = getUserByUserName(friendUsername);

        if (Objects.isNull(currentUser.getFriendsList()) && !currentUser.getUserName().equals(friendUsername)) {
            List<String> newFriends = new ArrayList<>();
            newFriends.add(userFriend.getUserName());
            currentUser.setFriendsList(newFriends);
            currentUser.setUpdatedDate(new Date());
        } else if (isYourFriend(currentUser, friendUsername) || currentUser.getUserName().equals(friendUsername)) {
            model.put("message", "Cannot add " + userFriend.getUserName() + " to friends " + currentUser.getUserName() + " user.");
            log.warn("Cannot add " + userFriend.getId() + " to friends " + currentUser.getId() + " user.");
            return new ResponseEntity<>(model, HttpStatus.BAD_REQUEST);
        } else {
            currentUser.getFriendsList().add(userFriend.getUserName());
            currentUser.setUpdatedDate(new Date());
        }
        userRepository.save(currentUser);
        model.put("message", "Friend " + userFriend.getUserName() + " added to " + currentUser.getUserName() + " user.");
        log.info("Friend " + userFriend.getId() + " added to " + currentUser.getId() + " user.");
        return ok(model);
    }

    public Object getProfile(String id, String currentToken) {
        User currentUser = getUserByToken(currentToken);
        User userToShow = getUserById(id);

        ProfileModelDto profile = new ProfileModelDto(userToShow.getName(), userToShow.getLastName(), userToShow.getCarsList(),
                userToShow.getPoints(), userToShow.isEnabled()
                , userToShow.getContact(), isYourFriend(currentUser, userToShow.getUserName()));
        return ok(profile);
    }

    public Object getMyProfile(String token) {
        return new ResponseEntity<>(getUserByToken(token), HttpStatus.OK);
    }

    public Object addPoints(String token, int points) {
        Map<Object, Object> model = new HashMap<>();
        User currentUser = getUserByToken(token);
        currentUser.setPoints(currentUser.getPoints() + points);
        currentUser.setUpdatedDate(new Date());
        userRepository.save(currentUser);
        model.put("message", points + " points added to " + currentUser.getUserName() + " user.");
        log.info(points + " points added to " + currentUser.getId() + " user.");
        return ok(model);
    }

    public Object removePoints(String token, int points) {
        Map<Object, Object> model = new HashMap<>();
        User currentUser = getUserByToken(token);
        currentUser.setPoints(currentUser.getPoints() - points);
        currentUser.setUpdatedDate(new Date());
        userRepository.save(currentUser);
        model.put("message", points + " points removed from " + currentUser.getUserName() + " user.");
        log.info(points + " points points removed from " + currentUser.getId() + " user.");
        return ok(model);
    }

    private boolean isYourFriend(User currentUser, String username) {
        if (currentUser.getFriendsList() != null) {
            String commonFriends = currentUser.getFriendsList().stream().filter(username::equals).findAny().orElse("");
            return !commonFriends.isEmpty();
        }
        return false;
    }


    public User getUserByToken(String token) {
        Optional<User> optionalUser = userRepository.findByUserNameOptional(jwtService.getUsername(token));
        return optionalUser.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found"));
    }

    public User getUserByUserName(String username) {
        Optional<User> optionalUserFriend = userRepository.findByUserNameOptional(username);
        return optionalUserFriend.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found"));
    }

    public User getUserById(String id) {
        Optional<User> optionalUserFriend = userRepository.findById(id);
        return optionalUserFriend.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found"));
    }
}
