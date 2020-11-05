import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {CarsService} from "../../logic/service/cars.service";

@Component({
  selector: 'app-modify-cars-data',
  templateUrl: './modify-cars-data.component.html',
  styleUrls: ['./modify-cars-data.component.scss']
})
export class ModifyCarsDataComponent implements OnInit {

  formCars: FormGroup;
  companies: string[]=[];
  models: string[]=[];
  generations: string[]=[];
  isCompanySelected:boolean=false;
  isModelSelected:boolean=false;
  isGenerationSelected:boolean=false;

  constructor(private formBuilder: FormBuilder, private carsService: CarsService) {
  }

  ngOnInit(): void {
    this.formCars = this.formBuilder.group({
      company: new FormControl(''),
      model: new FormControl(''),
      generation: new FormControl(''),
      newCompany: new FormControl(''),
      newModel: new FormControl(''),
      newGeneration: new FormControl(''),

    });
    this.loadCompaniesList();
  }

  addCars() {
    if(this.getNewCompany()!=''){
      this.carsService.addCompany(this.getNewCompany())
      this.formCars.controls.newCompany.reset('');
//clear Company select and others
    }else if(this.getNewModel()!=''){
      this.carsService.addModel(this.getCompany(),this.getNewModel())
      this.formCars.controls.newModel.reset('');
      this.companySelectionChange();
    }else if(this.getNewGeneration()!=''){
      this.carsService.addGeneration(this.getCompany(),this.getModel(),this.getNewGeneration())
      this.formCars.controls.newGeneration.reset('');
      this.modelSelectionChange()
    }
  }

  loadCompaniesList() {
    this.carsService.getCompaniesList().subscribe(companies => {
      this.companies = companies
    })
  }

  loadModelsList() {
    this.carsService.getModelsList(this.getCompany()).subscribe(models => {
      this.models = models;
    })
  }

  loadGenerationsList() {
    this.carsService.getGenerationList(this.getCompany(), this.getModel()).subscribe(generations => {
      this.generations = generations;
    })
  }

  getCompany() {
    return this.formCars.controls.company.value;
  }

  getModel() {
    return this.formCars.controls.model.value;
  }

getNewCompany() {
    return this.formCars.controls.newCompany.value;
  }

  getNewModel() {
    return this.formCars.controls.newModel.value;
  }

  getNewGeneration() {
    return this.formCars.controls.newGeneration.value;
  }

  companySelectionChange() {
    this.loadModelsList();
    this.isCompanySelected=true;
    this.isModelSelected=false;
    this.isGenerationSelected=false;
    this.formCars.controls.model.reset('');
    this.formCars.controls.generation.reset('');
  }

  modelSelectionChange() {
    this.loadGenerationsList();
    this.isModelSelected=true;
    this.isGenerationSelected=false;
    this.formCars.controls.generation.reset('');
  }

  generationSelectionChange() {
    this.isGenerationSelected=true;
  }

}
