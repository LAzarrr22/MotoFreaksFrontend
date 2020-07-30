package com.MJ.MotoFreaksBackend.MotoFreaksBackend.resource;

import com.MJ.MotoFreaksBackend.MotoFreaksBackend.db.collections.Account;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.repository.CarCompanyRepository;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.repository.AccountRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/accounts")
public class AccountController implements Controller {

    private final AccountRepository accountRepository;
    private final CarCompanyRepository carCompanyRepository;

    public AccountController(AccountRepository accountRepository, CarCompanyRepository carRepository) {
        this.accountRepository = accountRepository;
        this.carCompanyRepository = carRepository;
    }

    @Override
    public List<Account> getAll() {
        return accountRepository.findAll();
    }

    @PutMapping
    public void insert(@RequestBody Account account) {
        this.accountRepository.insert(account);
    }

    @PostMapping
    public void update(@RequestBody Account account) {
        this.accountRepository.save(account);
    }

    @Override
    public void delete(@PathVariable("id") String id) {
        this.accountRepository.deleteById(id);
    }

    @GetMapping("/{id}")
    public Optional<Account> getById(@PathVariable("id") String id) {
        Optional<Account> user = this.accountRepository.findById(id);
        return user;
    }


}

