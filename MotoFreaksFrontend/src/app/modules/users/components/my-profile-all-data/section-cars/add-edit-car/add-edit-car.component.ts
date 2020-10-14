import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CarModel} from "../../../../logic/dto/models/car.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProfileService} from "../../../../logic/services/profile.service";
import {NewCarModel} from "../../../../logic/dto/request/new-car.model";

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


  constructor(private formBuilder: FormBuilder, private profileService: ProfileService) {
  }

  ngOnInit(): void {
    if (this.isCarEdit && this.car) {
      this.formMerge = this.formBuilder.group({
        name: new FormControl(this.car.name, [Validators.required]),
        registration: new FormControl(this.car.registration),
        company: new FormControl(this.car.company),
        model: new FormControl(this.car.model),
        generation: new FormControl(this.car.generation),
        year: new FormControl(this.car.year),
        color: new FormControl(this.car.color),
        engine: new FormControl(this.car.engine),
        horsepower: new FormControl(this.car.horsepower),
        torque: new FormControl(this.car.torque),
      });
    } else {
      this.formMerge = this.formBuilder.group({
        name: new FormControl('', [Validators.required]),
        registration: new FormControl(''),
        company: new FormControl(''),
        model: new FormControl(''),
        generation: new FormControl(''),
        year: new FormControl(''),
        color: new FormControl(''),
        engine: new FormControl(''),
        horsepower: new FormControl(''),
        torque: new FormControl(''),
      });
    }
  }

  submit() {
    if (this.isCarEdit) {
      this.profileService.mergeCar(new NewCarModel(this.getName(), this.getRegistration(), this.getCompany(), this.getModel(), this.getGeneration(),
        this.getYear(), this.getColor(), this.getEngine(), this.getHorsepower(), this.getTorque()), this.car.id)
    } else if (this.isCarAdd) {
      console.log("test")
      this.profileService.addCar(new NewCarModel(this.getName(), this.getRegistration(), this.getCompany(), this.getModel(), this.getGeneration(),
        this.getYear(), this.getColor(), this.getEngine(), this.getHorsepower(), this.getTorque()))
    }
    this.closeTemplate.emit();
    setTimeout(() => {
      this.profileService.getMyProfile()
    }, 0);
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
}

