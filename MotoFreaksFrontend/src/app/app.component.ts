import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AppPath} from "./common/enums/app-path.enum";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MotoFreaksFrontend';

  constructor(private router: Router) {
  }

  openLogin() {
    this.router.navigate(['/' + AppPath.AUTH_LOGIN_PATH]);
  }

  openREG() {
    this.router.navigate(['/' + AppPath.AUTH_REGISTER_PATH]);
  }
}
