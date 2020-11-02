import {Gender} from "../../enums/gender.enums";

export class FriendUserModel {
  id: string;
  name: string;
  lastName: string;
  gender: Gender;


  constructor(id: string, name: string, lastName: string, gender: Gender) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.gender = gender;
  }
}
