import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RolesEnum} from "../../../../authentication/logic/enums/roles.enum";
import {AuthService} from "../../../../authentication/logic/services/auth.service";

@Component({
  selector: 'app-section-roles',
  templateUrl: './section-roles.component.html',
  styleUrls: ['./section-roles.component.scss']
})
export class SectionRolesComponent implements OnInit {

  @Input()
  roles: RolesEnum[];
  @Input()
  myProfile: boolean = false;

  @Output()
  setAdminAPI = new EventEmitter();
  @Output()
  setModeratorAPI = new EventEmitter();

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.isProfileAdmin()
  }

  isProfileAdmin() {
    return !!this.roles.find(role => role == RolesEnum.ADMIN);
  }

  isProfileModerator() {
    return !!this.roles.find(role => role == RolesEnum.MODERATOR);
  }

  isProfileUser() {
    return !!this.roles.find(role => role == RolesEnum.USER);
  }

  isCurrentUserAdmin() {
    return this.authService.isAdmin();
  }

  isCurrentUserModerator() {
    return this.authService.isModerator();
  }

  setAdmin() {
    this.setAdminAPI.emit()
  }

  setModerator() {
    this.setModeratorAPI.emit()
  }
}
