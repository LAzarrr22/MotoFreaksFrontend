package com.MJ.MotoFreaksBackend.MotoFreaksBackend.repository;

import com.MJ.MotoFreaksBackend.MotoFreaksBackend.db.collections.Account;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepository extends MongoRepository<Account, String> {


}
