import {Component, OnInit} from '@angular/core';
import {MenuService} from "../../../menu/logic/services/menu.service";
import {ActiveRoute} from "../../../../shared/enums/active-route.enum";
import {Router} from "@angular/router";
import {AppPath} from "../../../../shared/enums/app-path.enum";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private menuService: MenuService, private router: Router) {

  }

  ngOnInit(): void {
    this.menuService.activeRoute.next(ActiveRoute.HOME)
  }

  goToChallen() {
    this.router.navigate([AppPath.CHALLENGES_ALL_PATH])
  }
}
