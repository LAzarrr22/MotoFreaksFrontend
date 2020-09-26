import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../logic/services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  isAdmin: boolean;
  isModerator: boolean;

  constructor(private auth: AuthService) {
    this.isAdmin = this.auth.isAdmin();
    this.isModerator = this.auth.isModerator();
  }

  ngOnInit(): void {
  }

}
