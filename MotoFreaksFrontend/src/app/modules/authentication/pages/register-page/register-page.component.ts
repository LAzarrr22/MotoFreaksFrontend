import {Component, OnInit} from '@angular/core';
import {ActiveRoute} from "../../../../shared/enums/active-route.enum";
import {MenuService} from "../../../menu/logic/services/menu.service";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  constructor(private menuService: MenuService) {
  }

  ngOnInit(): void {
    this.menuService.activeRoute.next(ActiveRoute.REGISTER)

  }

}
