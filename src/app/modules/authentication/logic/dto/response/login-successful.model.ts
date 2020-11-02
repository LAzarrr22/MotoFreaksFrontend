import {RolesEnum} from "../../enums/roles.enum";

export class LoginSuccessfulDto {
  username: string;
  token: string;
  roles: RolesEnum[];


  constructor(username: string, token: string, roles: RolesEnum[]) {
    this.username = username;
    this.token = token;
    this.roles = roles;
  }
}
