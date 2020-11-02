import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CarModel} from "../../../../logic/dto/models/car.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProfileService} from "../../../../logic/services/profile.service";
import {NewCarModel} from "../../../../logic/dto/request/new-car.model";
import {ValidationMessageMap} from "../../../../../../shared/interfaces/validation-message-map";
import {CarsService} from "../../../../../cars/logic/service/cars.service";

@Component({
  selector: 'app-add-edit-car',
  templateUrl: './add-edit-car.component.html',
  styleUrls: ['./add-edit-car.component.scss']
})
export class AddEditCarComponent implements OnInit {

  @Input()
  car: CarModel;
  formMerge: FormGroup;
  @Input()
  isCarEdit: boolean = false;
  @Input()
  isCarAdd: boolean = false;
  @Output()
  closeTemplate = new EventEmitter();
  validationMessages: ValidationMessageMap;
  companies: string[];
  models: string[]
  generations: string[];


  constructor(private formBuilder: FormBuilder, private profileService: ProfileService, private carsService: CarsService) {
    this.validationMessages = {
      year: {
        pattern: 'Password must contain only number',
        maxlength: 'Year must be at least 4 number long'
      },
      horsepower: {
        pattern: 'Password must contain only number',
        maxlength: 'Year must be at least 4 number long'
      },
      torque: {
        pattern: 'Password must contain only number',
        maxlength: 'Year must be at least 4 number long'
      },
      name: {
        maxlength: 'Year must be at least 16 number long'
      }
    }
  }

  ngOnInit(): void {
    this.formMerge = this.formBuilder.group({
      name: new FormControl(this.car != undefined ? this.car.name : '', [Validators.required, Validators.maxLength(16)]),
      registration: new FormControl(this.car != undefined ? this.car.registration : ''),
      company: new FormControl(this.car != undefined ? this.car.company : '', [Validators.required]),
      model: new FormControl(this.car != undefined ? this.car.model : '', [Validators.required]),
      generation: new FormControl(this.car != undefined ? this.car.generation : '', [Validators.required]),
      year: new FormControl(this.car != undefined ? this.car.year : '', [Validators.required, Validators.maxLength(4), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
      color: new FormControl(this.car != undefined ? this.car.color : ''),
      engine: new FormControl(this.car != undefined ? this.car.engine : ''),
      horsepower: new FormControl(this.car != undefined ? this.car.horsepower : '', [Validators.maxLength(4), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
      torque: new FormControl(this.car != undefined ? this.car.torque : '', [Validators.maxLength(4), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
    });
    this.loadCompaniesList();

    if (this.car) {
      this.loadModelsList();
      this.loadGenerationsList();
    }

  }

  submit() {
    if (this.formMerge.valid) {
      if (this.isCarEdit) {
        this.profileService.mergeCar(new NewCarModel(this.getName(), this.getRegistration(), this.getCompany(), this.getModel(), this.getGeneration(),
          this.getYear(), this.getColor(), this.getEngine(), this.getHorsepower(), this.getTorque()), this.car.id)
      } else if (this.isCarAdd) {
        this.profileService.addCar(new NewCarModel(this.getName(), this.getRegistration(), this.getCompany(), this.getModel(), this.getGeneration(),
          this.getYear(), this.getColor(), this.getEngine(), this.getHorsepower(), this.getTorque()))
      }

      this.closeEditing();
      setTimeout(() => {
        this.profileService.getMyProfile()
      }, 500);
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

  closeEditing() {
    this.closeTemplate.emit();
  }

  getName() {
    return this.formMerge.controls.name.value;
  }

  getRegistration() {
    return this.formMerge.controls.registration.value;
  }

  getCompany() {
    return this.formMerge.controls.company.value;
  }

  getModel() {
    return this.formMerge.controls.model.value;
  }

  getGeneration() {
    return this.formMerge.controls.generation.value;
  }

  getYear() {
    return this.formMerge.controls.year.value;
  }

  getColor() {
    return this.formMerge.controls.color.value;
  }

  getEngine() {
    return this.formMerge.controls.engine.value;
  }

  getHorsepower() {
    return this.formMerge.controls.horsepower.value;
  }

  getTorque() {
    return this.formMerge.controls.torque.value;
  }

  companySelectionChange() {
    this.loadModelsList();
    this.formMerge.controls.model.reset('');
    this.formMerge.controls.generation.reset('');
  }

  modelSelectionChange() {
    this.loadGenerationsList();
    this.formMerge.controls.generation.reset('');
  }
}

