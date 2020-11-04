import {RolesEnum} from "../../enums/roles.enum";

export class LoginSuccessfulDto {
  username: string;
  validated: boolean;
  token: string;
  roles: RolesEnum[];


  constructor(username: string, validated: boolean, token: string, roles: RolesEnum[]) {
    this.username = username;
    this.validated = validated;
    this.token = token;
    this.roles = roles;
  }
}
