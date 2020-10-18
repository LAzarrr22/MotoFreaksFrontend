import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RolesEnum} from "../../../../authentication/logic/enums/roles.enum";

@Component({
  selector: 'app-section-roles',
  templateUrl: './section-roles.component.html',
  styleUrls: ['./section-roles.component.scss']
})
export class SectionRolesComponent implements OnInit {

  @Input()
  roles: RolesEnum[];

  @Output()
  setAdminAPI = new EventEmitter();
  @Output()
  setModeratorAPI = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
    this.isProfileAdmin()
  }

  isProfileAdmin() {
    console.dir(this.roles)
    return !!this.roles.find(role => role == RolesEnum.ADMIN);
  }

  isProfileModerator() {
    return !!this.roles.find(role => role == RolesEnum.MODERATOR);
  }

  setAdmin() {
    this.setAdminAPI.emit()
  }

  setModerator() {
    this.setModeratorAPI.emit()
  }
}
