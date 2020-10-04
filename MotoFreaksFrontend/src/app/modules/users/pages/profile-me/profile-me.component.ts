import {Component, OnInit} from '@angular/core';
import {ActiveRoute} from "../../../../shared/enums/active-route.enum";
import {MenuService} from "../../../menu/logic/services/menu.service";

@Component({
  selector: 'app-profile-me',
  templateUrl: './profile-me.component.html',
  styleUrls: ['./profile-me.component.scss']
})
export class ProfileMeComponent implements OnInit {

  constructor(private menuService: MenuService) {
  }

  ngOnInit(): void {
    this.menuService.activeRoute.next(ActiveRoute.MY_PROFILE)
  }

}
