import {Gender} from "../../enums/gender.enums";

export class MergeUserModel {

  name: string;
  lastName: string;
  gender: Gender;
  enabled: boolean;
  password: string;


  constructor(name: string, lastName: string, gender: Gender, enabled: boolean, password: string) {
    this.name = name;
    this.lastName = lastName;
    this.gender = gender;
    this.enabled = enabled;
    this.password = password;
  }
}
