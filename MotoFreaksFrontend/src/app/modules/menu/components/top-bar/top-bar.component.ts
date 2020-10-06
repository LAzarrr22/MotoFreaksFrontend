import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AuthenticationState, isUserLoggedIn} from "../../../authentication/logic/store";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  isLogged: boolean;

  constructor(private authStore: Store<AuthenticationState>) {
    this.authStore.select(isUserLoggedIn).subscribe(isLoggedState => this.isLogged = isLoggedState)
  }

  ngOnInit(): void {
  }

}
