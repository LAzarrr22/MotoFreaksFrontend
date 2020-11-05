import { Component, OnInit } from '@angular/core';
import {ActiveRoute} from "../../../../shared/enums/active-route.enum";
import {MenuService} from "../../../menu/logic/services/menu.service";

@Component({
  selector: 'app-modify-cars',
  templateUrl: './modify-cars.component.html',
  styleUrls: ['./modify-cars.component.scss']
})
export class ModifyCarsComponent implements OnInit {

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuService.activeRoute.next(ActiveRoute.CARS);
    window.scroll(0,0)
  }

}
