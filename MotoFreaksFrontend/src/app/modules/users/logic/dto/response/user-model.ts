import {Gender} from "../../../../profiles/logic/enums/gender.enums";
import {CarModel} from "../../../../profiles/logic/dto/models/car.model";
import {ContactModel} from "../../../../profiles/logic/dto/models/contact.model";
import {AddressModel} from "../../../../profiles/logic/dto/models/address.model";

export class UserModel {
  id: string;
  name: string;
  lastName: string;
  gender: Gender;
  enabled: boolean;
  carsList: CarModel[];
  contact: ContactModel;
  address: AddressModel;
  points: number
  friendsList: string[];
  isYourFriend: boolean;


  constructor(id: string, name: string, lastName: string, gender: Gender, enabled: boolean, carsList: CarModel[], contact: ContactModel, address: AddressModel, points: number, friendsList: string[], isYourFriend: boolean) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.gender = gender;
    this.enabled = enabled;
    this.carsList = carsList;
    this.contact = contact;
    this.address = address;
    this.points = points;
    this.friendsList = friendsList;
    this.isYourFriend = isYourFriend;
  }
}
