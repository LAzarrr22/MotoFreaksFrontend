package com.MJ.MotoFreaksBackend.MotoFreaksBackend.config;

import com.MJ.MotoFreaksBackend.MotoFreaksBackend.db.collections.*;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.enums.*;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.models.*;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.repository.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.*;

@Component
public class DBSeeder implements CommandLineRunner {

    private final AccountRepository accountRepository;
    private final CarCompanyRepository carCompanyRepository;
    private final EventRepository eventRepository;
    private final GroupRepository groupRepository;
    private final ChallengeRepository challengeRepository;
    private final RecomencdationRepository recomencdationRepository;
    private final AdvertisementRepository advertisementRepository;
    private final RoleRepository roleRepository;
    private final UserRepository userRepository;


    public DBSeeder(AccountRepository accountRepository, CarCompanyRepository carCompanyRepository, EventRepository eventRepository,
                    GroupRepository groupRepository, ChallengeRepository challengeRepository, RecomencdationRepository recomencdationRepository, AdvertisementRepository advertisementRepository, RoleRepository roleRepository, UserRepository userRepository) {
        this.accountRepository = accountRepository;
        this.carCompanyRepository = carCompanyRepository;
        this.eventRepository = eventRepository;
        this.groupRepository = groupRepository;
        this.challengeRepository = challengeRepository;
        this.recomencdationRepository = recomencdationRepository;
        this.advertisementRepository = advertisementRepository;

        this.roleRepository = roleRepository;
        this.userRepository = userRepository;
    }

    @Override
    public void run(String... args) throws Exception {

        Generation tt1 = new Generation("8N");
        Generation tt2 = new Generation("8J");
        Generation tt3 = new Generation("8P");

        List<Generation> gentt = new ArrayList<>();

        gentt.add(tt1);
        gentt.add(tt2);
        gentt.add(tt3);

        Model tt = new Model("TT", gentt);

        List<Model> audiModels = new ArrayList<>();
        audiModels.add(tt);
        CarCompany audi = new CarCompany("Audi", audiModels);


        Date date = new Date();

        List<Cars> cars = new ArrayList<>();
        List<HistoryLogin> hist = new ArrayList<>();
        List<String> friends = new ArrayList<>();
        friends.add("12124214");
        friends.add("121242sada14");
        friends.add("121242sadasda14");
        Cars cars1 = new Cars("czarneAudi", "Audi", "TT", "8N", 1999, "black", "test");
        cars.add(cars1);
        Contact contact = new Contact("maciek.janik24@gmail.com", "43534", "test", "test", "test");
        Address address = new Address("PL", "test", "test");
        HistoryLogin historyLogin = new HistoryLogin(date, date, "test");
        hist.add(historyLogin);
        Level level = new Level("admin", Levels.ADMINISTATOR, date, date);
        Account account = new Account("Maciek", "Janik", "lazar123",
                "querty12345", date, date, AccountState.ENABLED, cars, contact, address,
                hist, level, 324, friends);


        Map<MemberState, List<String>> memberStateMap = new HashMap<>();

        memberStateMap.put(MemberState.ACCEPTED, friends);
        Event event = new Event(TypeEvents.MEETING, "Spotkanie", date, date, "parking", "wspolne spotkanie", "1234", memberStateMap);

        List<Topic> topics = new ArrayList<>();
        List<Post> posts = new ArrayList<>();
        Post post = new Post("jak naprawic kolo", "potrzebujesz kluczy", date, date, friends, "1234");
        posts.add(post);

        Topic topic = new Topic("jak naprawic kolo", date, date, "1234", "naprawa", posts);
        topics.add(topic);
        Group group = new Group("my group", date, date, "Audi", "test", "test", topics, memberStateMap, "1234");


        List<QuestionAnswer> QA = new ArrayList<>();
        Map<String, Boolean> mapQA = new HashMap<>();
        List<Map<String, Boolean>> listQA = new ArrayList<>();
        mapQA.put("AAAAA", Boolean.TRUE);
        mapQA.put("BBBBB", Boolean.FALSE);
        mapQA.put("CCCCC", Boolean.FALSE);
        mapQA.put("DDDDD", Boolean.FALSE);
        listQA.add(mapQA);

        QuestionAnswer questionAnswer = new QuestionAnswer("kto zalozył audi", listQA);

        Challenge challenge = new Challenge("Audi test", date, date, "Audi", "test", "test", "test", "1234", questionAnswer);


        List<Review> reviews = new ArrayList<>();
        Review review = new Review("Polecam", 8, date, date, "1234");
        reviews.add(review);

        Recommendation recommendation = new Recommendation(TypeRecomendation.MECHANIC, "test", date, date, "1234", reviews);


        Advertisement advertisement = new Advertisement("TEST", "test", date, "Audi", "tt", "8n", "12344");

        UserRoles userRoles = new UserRoles();
        UserRoles userRoles2 = new UserRoles();
        userRoles.setRole(Role.ADMIN);//todo DATA
        userRoles2.setRole(Role.USER);//todo DATA





        //only one time run - to init database collection
     /*
     this.roleRepository.deleteAll();
        this.roleRepository.save(userRoles);
        this.roleRepository.save(userRoles2);
        this.carCompanyRepository.deleteAll();
     this.accountRepository.deleteAll();
     this.eventRepository.deleteAll();
     this.groupRepository.deleteAll();
     this.challengeRepository.deleteAll();
     this.recomencdationRepository.deleteAll();
     this.advertisementRepository.deleteAll();

     this.carCompanyRepository.save(audi);
     this.accountRepository.save(account);
     this.eventRepository.save(event);
     this.groupRepository.save(group);
     this.challengeRepository.save(challenge);
     this.recomencdationRepository.save(recommendation);
     this.advertisementRepository.save(advertisement);*/


    }
}
