import {Component, Input, OnInit} from '@angular/core';
import {CarModel} from "../../../../logic/dto/models/car.model";
import {ProfileService} from "../../../../logic/services/profile.service";

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.scss']
})
export class CarItemComponent implements OnInit {

  @Input()
  car: CarModel;
  isEditing: boolean = false;

  constructor(private profileService: ProfileService) {
  }

  ngOnInit(): void {
  }

  editCar() {
    this.isEditing = !this.isEditing;
  }

  removeCar() {
    this.profileService.removeCar(this.car.id);

    setTimeout(() => {
      this.profileService.getMyProfile().subscribe(profile => {
        console.dir(profile)
      })
    }, 200);
  }
}
