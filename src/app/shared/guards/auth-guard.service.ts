import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {AppPath} from "../enums/app-path.enum";
import {Injectable} from "@angular/core";
import {AuthService} from "../../modules/authentication/logic/services/auth.service";
import {MenuService} from "../../modules/menu/logic/services/menu.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService, private menuService: MenuService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.getToken() && !this.authService.isUnknown()) {
      this.menuService.enabled.next('true');
      return true;
    }

    this.router.navigate([AppPath.AUTH_LOGIN_PATH]);
    this.menuService.enabled.next('true');
    return false;
  }
}
