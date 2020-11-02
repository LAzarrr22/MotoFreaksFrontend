import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {UserLogout} from "../../logic/actions/authentication.actions";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {

  constructor(private store: Store, private router: Router) {
    this.store.dispatch(new UserLogout);
    this.router.navigate(['/login']);
  }


}
