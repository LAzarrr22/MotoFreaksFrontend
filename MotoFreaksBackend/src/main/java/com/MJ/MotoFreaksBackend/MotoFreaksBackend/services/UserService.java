package com.MJ.MotoFreaksBackend.MotoFreaksBackend.services;

import com.MJ.MotoFreaksBackend.MotoFreaksBackend.db.collections.User;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.models.CarModel;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public boolean addCar(String email, CarModel car) {
        User user = userRepository.findByEmail(email);
        if (Objects.isNull(user.getCarModelList())) {
            List<CarModel> newCar = new ArrayList<>();
            newCar.add(car);
            user.setCarModelList(newCar);
            userRepository.save(user);
            return true;
        } else {
            user.getCarModelList().add(car);
            userRepository.save(user);
            return true;
        }
    }
}
