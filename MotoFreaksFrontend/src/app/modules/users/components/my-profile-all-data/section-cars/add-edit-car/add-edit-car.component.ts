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

  @Output()
  closeEditing = new EventEmitter();


  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
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
  }

  mergeCar() {
    console.dir(this.formMerge)
    this.closeEditing.emit();
  }
}

