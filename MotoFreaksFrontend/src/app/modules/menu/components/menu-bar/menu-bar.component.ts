import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AppPath} from "../../../../shared/enums/app-path.enum";
import {MenuService} from "../../logic/services/menu.service";
import {Store} from "@ngrx/store";
import {AuthenticationState, isUserLoggedIn} from "../../../authentication/logic/store";

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  activeRoute: string = '';
  enabled: string = 'true';
  isLogged: boolean;

  constructor(private router: Router, private changeDetector: ChangeDetectorRef, private menuService: MenuService, private authStore: Store<AuthenticationState>) {
    this.authStore.select(isUserLoggedIn).subscribe(isLoggedState => this.isLogged = isLoggedState)
  }

  ngOnInit() {
    this.menuService.activeRoute.subscribe(activeElement => {
      this.activeRoute = activeElement;
      this.changeDetector.detectChanges();
    })
    this.menuService.enabled.subscribe(enabled => {
      this.enabled = enabled;
      this.changeDetector.detectChanges();
    })
  }


  goToHome() {
    this.router.navigate([AppPath.HOME_PATH]);
  }

  logOut() {
    this.router.navigate([AppPath.AUTH_LOGOUT_PATH])
  }

  goToRegister() {
    this.router.navigate([AppPath.AUTH_REGISTER_PATH])
  }

  goToLogin() {
    this.router.navigate([AppPath.AUTH_LOGIN_PATH])
  }

  goToMeProfile() {
    this.router.navigate([AppPath.MY_PROFILE])
  }
}
