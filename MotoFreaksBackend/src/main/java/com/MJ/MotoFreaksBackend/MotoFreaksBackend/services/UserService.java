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
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.*;

import static org.springframework.http.ResponseEntity.ok;

@Service
@Slf4j
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtTokenProvider jwtService;


    public Object addCar(String token, CarDataModel car) {
        Map<Object, Object> model = new HashMap<>();
        User currentUser = getUserByToken(token);
        if (Objects.isNull(currentUser.getCarsList())) {
            List<CarDataModel> newCarList = new ArrayList<>();
            newCarList.add(car);
            currentUser.setCarsList(newCarList);
            currentUser.setUpdatedDate(new Date());
        } else {
            currentUser.getCarsList().add(car);
            currentUser.setUpdatedDate(new Date());
        }
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

    public Object addFriend(String token, String friendEmail) {
        Map<Object, Object> model = new HashMap<>();
        User currentUser = getUserByToken(token);
        User userFriend = getUserByEmail(friendEmail);

        if (Objects.isNull(currentUser.getFriendsEmails()) && !currentUser.getUserName().equals(friendEmail)) {
            List<String> newFriends = new ArrayList<>();
            newFriends.add(userFriend.getUserName());
            currentUser.setFriendsEmails(newFriends);
            currentUser.setUpdatedDate(new Date());
        } else if (isYourFriend(currentUser, friendEmail) || currentUser.getUserName().equals(friendEmail)) {
            model.put("message", "Cannot add " + userFriend.getUserName() + " to friends " + currentUser.getUserName() + " user.");
            log.warn("Cannot add " + userFriend.getId() + " to friends " + currentUser.getId() + " user.");
            return new ResponseEntity<>(model, HttpStatus.FORBIDDEN);
        } else {
            currentUser.getFriendsEmails().add(userFriend.getUserName());
            currentUser.setUpdatedDate(new Date());
        }
        userRepository.save(currentUser);
        model.put("message", "Friend " + userFriend.getUserName() + " added to " + currentUser.getUserName() + " user.");
        log.info("Friend " + userFriend.getId() + " added to " + currentUser.getId() + " user.");
        return ok(model);
    }

    public Object getProfile(String email, String currentToken) {
        User currentUser = getUserByToken(currentToken);
        User userToShow = getUserByEmail(email);

        ProfileModelDto profile = new ProfileModelDto(userToShow.getName(), userToShow.getLastName(), userToShow.getCarsList(),
                userToShow.getPoints(), userToShow.isEnabled()
                , userToShow.getContact(), isYourFriend(currentUser, email));
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

    private boolean isYourFriend(User currentUser, String email) {
        if (currentUser.getFriendsEmails() != null) {
            String emailCommon = currentUser.getFriendsEmails().stream().filter(email::equals).findAny().orElse("");
            return !emailCommon.isEmpty();
        }
        return false;
    }


    private User getUserByToken(String token) {
        Optional<User> optionalUser = userRepository.findByUserNameOptional(jwtService.getUsername(token));
        return optionalUser.orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }

    public User getUserByEmail(String email) {
        Optional<User> optionalUserFriend = userRepository.findByUserNameOptional(email);
        return optionalUserFriend.orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }
}
