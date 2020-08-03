package com.MJ.MotoFreaksBackend.MotoFreaksBackend.resource.controller;


import com.MJ.MotoFreaksBackend.MotoFreaksBackend.db.collections.Advertisement;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.repository.AdvertisementRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/advertisement")
@Slf4j
public class AdvertisementController implements Controller {

    private final AdvertisementRepository advertisementRepository;

    public AdvertisementController(AdvertisementRepository advertisementRepository) {
        this.advertisementRepository = advertisementRepository;
    }

    @Override
    public void delete(String id) {
        this.advertisementRepository.deleteById(id);
    }

    @Override
    public List<Advertisement> getAll() {
        return advertisementRepository.findAll();
    }


    @PutMapping
    public void insert(@RequestBody Advertisement advertisement) {
        this.advertisementRepository.insert(advertisement);
    }

    @PostMapping
    public void update(@RequestBody Advertisement advertisement) {
        this.advertisementRepository.save(advertisement);
    }
}
