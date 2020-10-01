import {Component, OnInit} from '@angular/core';
import {MenuService} from "../../../menu/logic/services/menu.service";

@Component({
  selector: 'app-logout-page',
  templateUrl: './logout-page.component.html',
  styleUrls: ['./logout-page.component.scss']
})
export class LogoutPageComponent implements OnInit {

  constructor(private menuService: MenuService) {
  }

  ngOnInit(): void {
    this.menuService.activeRoute.next('')
  }

}
