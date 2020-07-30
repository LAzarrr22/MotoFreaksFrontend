package com.MJ.MotoFreaksBackend.MotoFreaksBackend.resource;

import com.MJ.MotoFreaksBackend.MotoFreaksBackend.db.collections.Challenge;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.repository.ChallengeRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/challenge")
public class ChallengeController implements Controller {

    private final ChallengeRepository challengeRepository;

    public ChallengeController(ChallengeRepository challengeRepository) {
        this.challengeRepository = challengeRepository;
    }

    @Override
    public void delete(String id) {
        this.challengeRepository.deleteById(id);
    }

    @Override
    public List<Challenge> getAll() {
        return challengeRepository.findAll();
    }


    @PutMapping
    public void insert(@RequestBody Challenge challenge) {
        this.challengeRepository.insert(challenge);
    }

    @PostMapping
    public void update(@RequestBody Challenge challenge) {
        this.challengeRepository.save(challenge);
    }
}
