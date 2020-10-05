import {Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {AppPath} from "../../shared/enums/app-path.enum";
import {MenuService} from "../menu/logic/services/menu.service";

@Injectable()
export class CommonComponentsService {

  constructor(private router: Router, private menuService: MenuService) {

  }

  error(error: any) {
    if (error.status === 0) {
      this.router.navigate([AppPath.SERVICE_NOT_AVAILABLE])
      this.menuService.enabled.next('false')
    }
  }

}
