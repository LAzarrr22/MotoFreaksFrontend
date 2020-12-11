import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {RolesEnum} from "./modules/authentication/logic/enums/roles.enum";
import {getAuthToken, getRoles} from "./modules/authentication/logic/reducers/authentication.reducers";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MotoFreaksFrontend';
  token: string;
  roles: [RolesEnum];
  isAdmin: boolean;

  constructor(private router: Router, private store: Store) {
    this.store.select(getAuthToken).subscribe(token => this.token = token);
    this.store.select(getRoles).subscribe(roles => this.roles = roles);

  }

}
