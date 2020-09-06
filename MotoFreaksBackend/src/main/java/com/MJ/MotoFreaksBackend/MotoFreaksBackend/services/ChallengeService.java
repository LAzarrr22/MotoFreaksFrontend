package com.MJ.MotoFreaksBackend.MotoFreaksBackend.services;

import com.MJ.MotoFreaksBackend.MotoFreaksBackend.db.collections.Challenge;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.exceptions.ChallengeNotFoundException;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.repository.ChallengeRepository;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.resource.requests.NewChallengeModel;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import static org.springframework.http.ResponseEntity.ok;

@Service
@Slf4j
public class ChallengeService {

    @Autowired
    private ChallengeRepository challengeRepository;

    @Autowired
    private UserService userService;


    private Challenge getChallengeByName(String name) {
        Optional<Challenge> optionalChallenge = challengeRepository.findEventByName(name);
        return optionalChallenge.orElseThrow(() -> new ChallengeNotFoundException("Challenge not found"));
    }

    public Challenge getChallengeByModel(String model) {
        Optional<Challenge> optionalChallenge = challengeRepository.findEventByModel(model);
        return optionalChallenge.orElseThrow(() -> new ChallengeNotFoundException("Challenge not found"));
    }

    public Object createChallenge(String token, NewChallengeModel challenge) {
        Map<Object, Object> model = new HashMap<>();
        Challenge newChallenge = new Challenge();
        newChallenge.setCreatedDate(new Date());
        newChallenge.setCreatorUserName(userService.getUserByToken(token).getUserName());
        newChallenge.setName(challenge.getName());
        newChallenge.setCompany(challenge.getCompany());
        newChallenge.setModel(challenge.getModel());
        newChallenge.setGeneration(challenge.getGeneration());
        newChallenge.setGroupId("test");//todo
        newChallenge.setQAList(challenge.getQAList());
        challengeRepository.save(newChallenge);
        model.put("message", "Challenge " + challenge.getName() + "was created.");
        log.info("Challenge " + challenge.getName() + "was created by " + newChallenge.getCreatorUserName());
        return ok(model);
    }
}

