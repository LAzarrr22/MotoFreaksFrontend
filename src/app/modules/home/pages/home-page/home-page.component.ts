import {Component, OnInit} from '@angular/core';
import {MenuService} from "../../../menu/logic/services/menu.service";
import {ActiveRoute} from "../../../../shared/enums/active-route.enum";
import {AuthService} from "../../../authentication/logic/services/auth.service";
import {Router} from "@angular/router";
import {AppPath} from "../../../../shared/enums/app-path.enum";
import {MatDialog} from "@angular/material/dialog";
import {NotValidateDialogComponent} from "../../components/not-validate-dialog/not-validate-dialog.component";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private menuService: MenuService, private authService: AuthService,
              private router:Router, public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.menuService.activeRoute.next(ActiveRoute.HOME);
    this.authService.isValidatedUser().subscribe(validation=>{
      if(!validation && this.authService.isLoggedUser()){
        const dialogRef = this.dialog.open(NotValidateDialogComponent);
        dialogRef.afterClosed().subscribe(result => {
          if(result){
            this.router.navigate([AppPath.PROFILE_ME_PATH]);
          }else{
            this.router.navigate([AppPath.AUTH_LOGOUT_PATH]);
          }
        });
      }
    });
  }

}
