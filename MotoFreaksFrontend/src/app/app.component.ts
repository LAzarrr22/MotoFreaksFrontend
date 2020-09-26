import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AppPath} from "./common/enums/app-path.enum";
import {getAuthToken} from "./authentication/logic/store";
import {Store} from "@ngrx/store";
import {AuthService} from "./authentication/logic/services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MotoFreaksFrontend';
  isLogged: boolean;
  token: string;

  constructor(private router: Router, private store: Store, private authService: AuthService) {


    this.store.select(getAuthToken).subscribe(token => this.token = token)
  }

  openLogin() {
    this.router.navigate([AppPath.AUTH_LOGIN_PATH]);
  }

  openREG() {
    this.router.navigate([AppPath.AUTH_REGISTER_PATH]);
  }

  LOGUOT() {
    this.router.navigate([AppPath.AUTH_LOGOUT_PATH]);
  }
}
