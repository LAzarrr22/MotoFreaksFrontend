package com.MJ.MotoFreaksBackend.MotoFreaksBackend.services;

import com.MJ.MotoFreaksBackend.MotoFreaksBackend.db.collections.User;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.enums.Role;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.models.Address;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.models.CarDataModel;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.models.Contact;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.repository.UserRepository;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.resource.response.ProfileModelDto;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.security.configs.JwtTokenProvider;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.security.services.CustomUserDetailsService;
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

    @Autowired
    private CustomUserDetailsService userAuthService;

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
        model.put("message", "Car " + car.getName() + " added to " + currentUser.getEmail() + " user.");
        log.info("Car " + car.getName() + " added to " + currentUser.getId() + " user.");
        return new ResponseEntity<>(model, HttpStatus.OK);
    }

    public Object mergeAddress(String token, Address address) {
        Map<Object, Object> model = new HashMap<>();
        User currentUser = getUserByToken(token);
        currentUser.setAddress(address);
        currentUser.setUpdatedDate(new Date());
        userRepository.save(currentUser);
        model.put("message", "Address was merged for " + currentUser.getEmail() + " user.");
        log.info("Address was merged for " + currentUser.getId() + " user.");
        return new ResponseEntity<>(model, HttpStatus.OK);
    }

    public Object mergeContact(String token, Contact contact) {
        Map<Object, Object> model = new HashMap<>();
        User currentUser = getUserByToken(token);
        currentUser.setContact(contact);
        currentUser.setUpdatedDate(new Date());
        userRepository.save(currentUser);
        model.put("message", "Contacts was merged for " + currentUser.getEmail() + " user.");
        log.info("Contacts was merged for " + currentUser.getId() + " user.");
        return new ResponseEntity<>(model, HttpStatus.OK);
    }

    public Object addFriend(String token, String friendEmail) {
        Map<Object, Object> model = new HashMap<>();
        User currentUser = getUserByToken(token);
        User userFriend = getUserByEmail(friendEmail);

        if (Objects.isNull(currentUser.getFriendsEmails()) && !currentUser.getEmail().equals(friendEmail)) {
            List<String> newFriends = new ArrayList<>();
            newFriends.add(userFriend.getEmail());
            currentUser.setFriendsEmails(newFriends);
            currentUser.setUpdatedDate(new Date());
        } else if (isYourFriend(currentUser, friendEmail) || currentUser.getEmail().equals(friendEmail)) {
            model.put("message", "Cannot add " + userFriend.getEmail() + " to friends " + currentUser.getEmail() + " user.");
            log.info("Cannot add " + userFriend.getId() + " to friends " + currentUser.getId() + " user.");
            return new ResponseEntity<>(model, HttpStatus.FORBIDDEN);
        } else {
            currentUser.getFriendsEmails().add(userFriend.getEmail());
            currentUser.setUpdatedDate(new Date());
        }
        userRepository.save(currentUser);
        model.put("message", "Friend " + userFriend.getEmail() + " added to " + currentUser.getEmail() + " user.");
        log.info("Friend " + userFriend.getId() + " added to " + currentUser.getId() + " user.");
        return new ResponseEntity<>(model, HttpStatus.OK);
    }

    public Object getProfile(String email, String currentToken) {
        User currentUser = getUserByToken(currentToken);
        User userToShow = getUserByEmail(email);

        ProfileModelDto profile = new ProfileModelDto(userToShow.getName(), userToShow.getLastName(), userToShow.getCarsList(),
                userToShow.getPoints(), userToShow.isEnabled()
                , userToShow.getContact(), isYourFriend(currentUser, email));
        return new ResponseEntity<>(profile, HttpStatus.OK);
    }

    public Object getMyProfile(String token) {
        return new ResponseEntity<>(getUserByToken(token), HttpStatus.OK);
    }

    public Object addPoints(String token, int points) {
        Map<Object, Object> model = new HashMap<>();
        User currentUser = getUserByToken(token);
        currentUser.setPoints(currentUser.getPoints() + points);
        currentUser.setUpdatedDate(new Date());
        userAuthService.addRole(currentUser, Role.USER);
        userRepository.save(currentUser);
        model.put("message", points + " points added to " + currentUser.getEmail() + " user.");
        log.info(points + " points added to " + currentUser.getId() + " user.");
        return new ResponseEntity<>(model, HttpStatus.OK);
    }

    public Object removePoints(String token, int points) {
        Map<Object, Object> model = new HashMap<>();
        User currentUser = getUserByToken(token);
        currentUser.setPoints(currentUser.getPoints() - points);
        currentUser.setUpdatedDate(new Date());
        userRepository.save(currentUser);
        model.put("message", points + " points removed from " + currentUser.getEmail() + " user.");
        log.info(points + " points points removed from " + currentUser.getId() + " user.");
        return new ResponseEntity<>(model, HttpStatus.OK);
    }

    private boolean isYourFriend(User currentUser, String email) {
        if (currentUser.getFriendsEmails() != null) {
            String emailCommon = currentUser.getFriendsEmails().stream().filter(email::equals).findAny().orElse("");
            return !emailCommon.isEmpty();
        }
        return false;
    }


    private User getUserByToken(String token) {
        Optional<User> optionalUser = userRepository.findByEmailOptional(jwtService.getUsername(token));
        User currentUser = optionalUser.orElseThrow(() -> new UsernameNotFoundException("User not found"));
        return currentUser;
    }

    private User getUserByEmail(String email) {
        Optional<User> optionalUserFriend = userRepository.findByEmailOptional(email);
        User currentUser = optionalUserFriend.orElseThrow(() -> new UsernameNotFoundException("User not found"));
        return currentUser;
    }
}
