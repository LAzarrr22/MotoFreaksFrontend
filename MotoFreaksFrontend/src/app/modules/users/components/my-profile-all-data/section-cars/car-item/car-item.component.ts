import {Component, Input, OnInit} from '@angular/core';
import {CarModel} from "../../../../logic/dto/models/car.model";

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.scss']
})
export class CarItemComponent implements OnInit {

  @Input()
  car: CarModel;

  constructor() {
  }

  ngOnInit(): void {
  }

}
