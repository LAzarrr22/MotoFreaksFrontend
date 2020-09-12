package com.MJ.MotoFreaksBackend.MotoFreaksBackend.resource.controller;

import com.MJ.MotoFreaksBackend.MotoFreaksBackend.resource.requests.NewChallengeModel;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.security.consts.AuthorizationHeader;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.services.ChallengeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

@RestController
@RequestMapping("/challenge")
public class ChallengeController {

    private final ChallengeService challengeService;

    @Autowired
    public ChallengeController(ChallengeService challengeService) {
        this.challengeService = challengeService;
    }

    @RequestMapping(path = "/create", method = RequestMethod.PUT, produces = "application/json")
    public Object createChallenge(HttpServletRequest req, @RequestBody NewChallengeModel challenge) {
        String token = req.getHeader(AuthorizationHeader.HEADER_NAME).replace(AuthorizationHeader.TOKEN_PREFIX, "");
        return challengeService.createChallenge(token, challenge);
    }

    @RequestMapping(path = "/findBy/car", method = RequestMethod.GET, produces = "application/json")
    public Object findByCar(@RequestParam Map<String, String> carParam) {
        return challengeService.findByCar(carParam);
    }

    @RequestMapping(path = "/findBy/user/{user}", method = RequestMethod.GET, produces = "application/json")
    public Object findByUser(@PathVariable("user") String username) {
        return challengeService.findByUser(username);
    }

    @RequestMapping(path = "/findBy/id/{id}", method = RequestMethod.GET, produces = "application/json")
    public Object findById(@PathVariable("id") String id) {
        return challengeService.findById(id);
    }

    @RequestMapping(path = "/check/exists/{name}", method = RequestMethod.GET, produces = "application/json")
    public Object isExists(@PathVariable("name") String name) {
        return challengeService.isExistByName(name);
    }
}
