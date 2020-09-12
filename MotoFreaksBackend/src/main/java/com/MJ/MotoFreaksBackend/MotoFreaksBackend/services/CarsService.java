package com.MJ.MotoFreaksBackend.MotoFreaksBackend.services;

import com.MJ.MotoFreaksBackend.MotoFreaksBackend.db.collections.CarCompany;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.repository.CarCompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CarsService {

    private final CarCompanyRepository carRepository;

    @Autowired
    public CarsService(CarCompanyRepository carRepository) {
        this.carRepository = carRepository;
    }


    public void mergeCarModel(String company, String model, String generation) {
        List<CarCompany> carsList = findAll();

    }

    public void deleteCompanyByName(String company) {
    }

    public void deleteModelByName(String company, String model) {
    }

    public void deleteGenerationByName(String company, String model, String generation) {
    }

    public List<CarCompany> findAll() {
        return carRepository.findAll();
    }

    private boolean isCompanyExists(String company) {
        List<CarCompany> findCars = findAll().stream().filter(car -> car.getName().equals(company)).collect(Collectors.toList());
        return !findCars.isEmpty();
    }

    private boolean isModelExists(String company, String model) {
        List<CarCompany> findCars = findAll().stream().filter(currentCompany -> currentCompany.getModelList().stream()
                .anyMatch(currentModel -> currentModel.getName().equals(model) && currentCompany.getName().equals(company))).collect(Collectors.toList());
        return !findCars.isEmpty();
    }

    private boolean isGenerationExists(String company, String model, String generation) {
        List<CarCompany> findCars = findAll().stream().filter(currentCompany -> currentCompany.getModelList().stream()
                .anyMatch(currentModel -> currentModel.getGenerationList().stream()
                        .anyMatch(currentGeneration -> currentModel.getName().equals(model)
                                && currentCompany.getName().equals(company)
                                && currentGeneration.getName().equals(generation))))
                .collect(Collectors.toList());
        return !findCars.isEmpty();
    }
}


