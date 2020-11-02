import {Component, Input, OnInit} from '@angular/core';
import {CarModel} from "../../../logic/dto/models/car.model";

@Component({
  selector: 'app-section-cars',
  templateUrl: './section-cars.component.html',
  styleUrls: ['./section-cars.component.scss']
})
export class SectionCarsComponent implements OnInit {
  @Input()
  cars: CarModel[];
  @Input()
  myProfile: boolean = false;
  isAddingCar: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  addCar() {
    this.isAddingCar = !this.isAddingCar;
  }
}
