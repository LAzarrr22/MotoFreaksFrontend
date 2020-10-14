import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CarModel} from "../../../../logic/dto/models/car.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

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


  constructor(private formBuilder: FormBuilder) {
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

  mergeCar() {
    console.dir(this.formMerge)
    this.closeTemplate.emit();
  }
}

