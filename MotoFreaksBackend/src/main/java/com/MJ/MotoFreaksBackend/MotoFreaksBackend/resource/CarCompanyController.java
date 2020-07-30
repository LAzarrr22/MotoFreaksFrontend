package com.MJ.MotoFreaksBackend.MotoFreaksBackend.resource;

import com.MJ.MotoFreaksBackend.MotoFreaksBackend.db.collections.CarCompany;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.repository.CarCompanyRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cars")
public class CarCompanyController implements Controller {

    private final CarCompanyRepository carCompanyRepository;

    public CarCompanyController(CarCompanyRepository carCompanyRepository) {
        this.carCompanyRepository = carCompanyRepository;
    }

    @Override
    public void delete(String id) {
        this.carCompanyRepository.deleteById(id);
    }

    @Override
    public List<CarCompany> getAll() {
        return carCompanyRepository.findAll();
    }


    @PutMapping
    public void insert(@RequestBody CarCompany carCompany) {
        this.carCompanyRepository.insert(carCompany);
    }

    @PostMapping
    public void update(@RequestBody CarCompany carCompany) {
        this.carCompanyRepository.save(carCompany);
    }
}
