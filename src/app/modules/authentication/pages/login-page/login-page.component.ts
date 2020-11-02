import {Component, OnInit} from '@angular/core';
import {MenuService} from "../../../menu/logic/services/menu.service";
import {ActiveRoute} from "../../../../shared/enums/active-route.enum";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private menuService: MenuService) {
  }

  ngOnInit(): void {
    this.menuService.activeRoute.next(ActiveRoute.LOGIN)
  }

}
