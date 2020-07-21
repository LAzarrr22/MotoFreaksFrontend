package com.MJ.MotoFreaksBackend.MotoFreaksBackend.resource;

import com.MJ.MotoFreaksBackend.MotoFreaksBackend.db.collections.CarCompany;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.db.collections.User;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.repository.CarCompanyRepository;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserResource implements Resources {

    private final UserRepository userRepository;
    private final CarCompanyRepository carCompanyRepository;

    public UserResource(UserRepository userRepository, CarCompanyRepository carRepository) {
        this.userRepository = userRepository;
        this.carCompanyRepository = carRepository;
    }

    @Override
    public List<User> getAll() {
        return userRepository.findAll();
    }

    @PutMapping
    public void insert(@RequestBody User user) {
        this.userRepository.insert(user);
    }

    @PostMapping
    public void update(@RequestBody User user) {
        this.userRepository.save(user);
    }

    @Override
    public void delete(@PathVariable("id") String id) {
        this.userRepository.deleteById(id);
    }

    @GetMapping("/{id}")
    public Optional<User> getById(@PathVariable("id") String id) {
        Optional<User> user = this.userRepository.findById(id);
        return user;
    }


}

