package com.MJ.MotoFreaksBackend.MotoFreaksBackend.repository;

import com.MJ.MotoFreaksBackend.MotoFreaksBackend.db.collections.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.Optional;


public interface UserRepository extends MongoRepository<User, String> {

    @Query("{'email': ?0}")
    User findByEmail(String email);

    @Query("{'id': ?0}")
    Optional<User> findById(String id);
}
