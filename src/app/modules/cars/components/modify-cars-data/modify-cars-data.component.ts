import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {CarsService} from "../../logic/service/cars.service";
import {Observable} from "rxjs";
import {Actions, ofType} from "@ngrx/effects";
import {UserLoginFail} from "../../../authentication/logic/actions/authentication.actions";
import {map} from "rxjs/operators";
import {ADD_ITEM_FAIL, AddItemFail} from "../../logic/action/cars.action";

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
  errorMessage: Observable<string>

  constructor(private formBuilder: FormBuilder, private carsService: CarsService, private actions: Actions) {
    this.errorMessage = this.actions.pipe(ofType(ADD_ITEM_FAIL), map((action: AddItemFail) => action.payload));
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
    if(this.getNewGeneration()!='' && this.isModelSelected){
      this.addGeneration()
    } else if(this.getNewModel()!='' && this.isCompanySelected){
      this.addModel();
    }else if(this.getNewCompany()!=''){
      this.addCompany()
    }
  }

  addCompany(){
    this.carsService.addCompany(this.getNewCompany())
    this.formCars.controls.company.reset(this.getNewCompany().toLowerCase());
    this.formCars.controls.newCompany.reset('');
    this.companySelectionChange()
  }

  addModel(){
    this.carsService.addModel(this.getCompany(),this.getNewModel())
    this.formCars.controls.model.reset(this.getNewModel().toLowerCase());
    this.formCars.controls.newModel.reset('');
    this.modelSelectionChange();
    this.generations=[];
  }

  addGeneration(){
    this.carsService.addGeneration(this.getCompany(),this.getModel(),this.getNewGeneration())
    this.formCars.controls.generation.reset(this.getNewGeneration().toLowerCase());
    this.formCars.controls.newGeneration.reset('');
    this.isGenerationSelected=true;
  }

  deleteCompany() {
    if(this.getCompany()!='') {
      this.carsService.deleteCompany(this.getCompany())
      this.isCompanySelected=false;
      this.formCars.controls.company.reset('');
      this.clearModelAndGeneration()
    }
  }

  deleteModel() {
  if(this.getModel()!=''){
  this.carsService.deleteModel(this.getCompany(),this.getModel())
  this.companySelectionChange();
}
  }

  deleteGeneration() {
    if(this.getGeneration()!=''){
      this.carsService.deleteGeneration(this.getCompany(),this.getModel(),this.getGeneration())
      this.modelSelectionChange()
    }
  }

  clearModelAndGeneration(){
    this.isModelSelected=false;
    this.isGenerationSelected=false;
    this.formCars.controls.model.reset('');
    this.formCars.controls.generation.reset('');
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
  getGeneration() {
    return this.formCars.controls.generation.value;
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
    if(!!this.errorMessage){
      this.loadModelsList();
      this.isCompanySelected=true;
      this.clearModelAndGeneration()
    }

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
