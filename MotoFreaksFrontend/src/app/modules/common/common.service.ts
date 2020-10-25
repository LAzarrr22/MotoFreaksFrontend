import {Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {AppPath} from "../../shared/enums/app-path.enum";
import {MenuService} from "../menu/logic/services/menu.service";
import {Store} from "@ngrx/store";
import {AuthenticationState} from "../authentication/logic/store";
import {UserLogout} from "../authentication/logic/actions/authentication.actions";

@Injectable()
export class CommonComponentsService {

  constructor(private router: Router, private menuService: MenuService, private readonly store: Store<AuthenticationState>) {

  }

  error(error: any) {
    if (error.status === 0) {
      this.store.dispatch(new UserLogout());
      this.router.navigate([AppPath.SERVICE_NOT_AVAILABLE])
      this.menuService.enabled.next('false')
    }
  }

}
