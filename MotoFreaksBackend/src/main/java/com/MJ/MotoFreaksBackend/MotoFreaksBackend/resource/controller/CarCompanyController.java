package com.MJ.MotoFreaksBackend.MotoFreaksBackend.resource.controller;

import com.MJ.MotoFreaksBackend.MotoFreaksBackend.db.collections.CarCompany;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.services.CarsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/cars")
public class CarCompanyController {

    private final CarsService carsService;

    @Autowired
    public CarCompanyController(CarsService carsService) {
        this.carsService = carsService;
    }


    @RequestMapping(path = "/merge/company/{company}/model/{model}/generation/{generation}", method = RequestMethod.POST, produces = "application/json")
    public void add(@PathVariable("company") String company, @PathVariable("model") String model, @PathVariable("generation") String generation) {
        this.carsService.mergeCarModel(company, model, generation);
    }

    @RequestMapping(path = "/delete/company/{company}", method = RequestMethod.DELETE, produces = "application/json")
    public void delete(@PathVariable("company") String company) {
        this.carsService.deleteCompanyByName(company);
    }

    @RequestMapping(path = "/delete/company/{company}/model/{model}", method = RequestMethod.DELETE, produces = "application/json")
    public void delete(@PathVariable("company") String company, @PathVariable("model") String model) {
        this.carsService.deleteModelByName(company, model);
    }

    @RequestMapping(path = "/delete/company/{company}/model/{model}/generation/{generation}", method = RequestMethod.DELETE, produces = "application/json")
    public void delete(@PathVariable("company") String company, @PathVariable("model") String model, @PathVariable("generation") String generation) {
        this.carsService.deleteGenerationByName(company, model, generation);
    }

    @RequestMapping(path = "/all", method = RequestMethod.GET, produces = "application/json")
    public List<CarCompany> getAll() {
        return carsService.findAll();
    }


}
