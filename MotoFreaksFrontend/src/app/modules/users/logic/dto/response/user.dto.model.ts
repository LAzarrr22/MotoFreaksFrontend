import {CarModel} from "../models/car.model";
import {AddressModel} from "../models/address.model";
import {ContactModel} from "../models/contact.model";

export class UserDtoModel {
  id: string
  name: string
  lastName: string
  enabled: boolean
  carsList: CarModel[];
  contact: ContactModel;
  address: AddressModel
  points: number
  friendsList: string[]
  isYourFriend: boolean;


  constructor(id: string, name: string, lastName: string, enabled: boolean, carsList: CarModel[], contact: ContactModel, address: AddressModel, points: number, friendsList: string[], isYourFriend: boolean) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.enabled = enabled;
    this.carsList = carsList;
    this.contact = contact;
    this.address = address;
    this.points = points;
    this.friendsList = friendsList;
    this.isYourFriend = isYourFriend;
  }
}
