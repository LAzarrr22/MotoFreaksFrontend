import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "../../modules/authentication/logic/services/auth.service";
import {MenuService} from "../../modules/menu/logic/services/menu.service";
import {AppPath} from "../enums/app-path.enum";

@Injectable({
  providedIn: 'root'
})
export class ModeratorGuard implements CanActivate{

  constructor(private router: Router, private authService: AuthService, private menuService: MenuService) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if(this.authService.isModerator()){
      this.menuService.enabled.next('true');
      return true;
    }else{
      this.router.navigate([AppPath.HOME_PATH]);
      this.menuService.enabled.next('true');
      return false;
    }

  }


}
