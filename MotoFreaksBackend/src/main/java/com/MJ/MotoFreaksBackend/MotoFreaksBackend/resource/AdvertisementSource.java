package com.MJ.MotoFreaksBackend.MotoFreaksBackend.resource;


import com.MJ.MotoFreaksBackend.MotoFreaksBackend.db.collections.Advertisement;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.repository.AdvertisementRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/advertisement")
public class AdvertisementSource implements Resources {

    private final AdvertisementRepository advertisementRepository;

    public AdvertisementSource(AdvertisementRepository advertisementRepository) {
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
