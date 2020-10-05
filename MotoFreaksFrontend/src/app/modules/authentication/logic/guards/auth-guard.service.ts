import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {AppPath} from "../../../../shared/enums/app-path.enum";
import {Injectable} from "@angular/core";
import {AuthService} from "../services/auth.service";
import {MenuService} from "../../../menu/logic/services/menu.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService, private menuService: MenuService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem('token') && !this.authService.isUnknown()) {
      this.menuService.enabled.next('true');
      return true;
    }

    this.router.navigate([AppPath.AUTH_LOGIN_PATH]);
    this.menuService.enabled.next('true');
    return false;
  }
}
