import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AppPath} from "./shared/enums/app-path.enum";
import {getAuthToken, getRoles} from "./modules/authentication/logic/store";
import {Store} from "@ngrx/store";
import {RolesEnum} from "./modules/authentication/logic/enums/roles.enum";
import {AuthService} from "./modules/authentication/logic/services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MotoFreaksFrontend';
  isLogged: boolean;
  token: string;
  roles: [RolesEnum];
  isAdmin: boolean;

  constructor(private router: Router, private store: Store, private authService: AuthService) {


    this.store.select(getAuthToken).subscribe(token => this.token = token);
    this.store.select(getRoles).subscribe(roles => this.roles = roles);

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

  isAdmintest() {
    this.authService.isAdmin();
  }
}
