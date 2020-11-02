import {Component, OnInit} from '@angular/core';
import {MenuService} from "../../menu/logic/services/menu.service";
import {Router} from "@angular/router";
import {AppPath} from "../../../shared/enums/app-path.enum";

@Component({
  selector: 'app-connection-refused',
  templateUrl: './connection-refused.component.html',
  styleUrls: ['./connection-refused.component.scss']
})
export class ConnectionRefusedComponent implements OnInit {

  constructor(private menuService: MenuService, private router: Router) {
  }

  ngOnInit(): void {
    this.menuService.enabled.next('false')
  }

  goToHome() {
    this.router.navigate([AppPath.HOME_PATH])
  }
}
