import {CarModel} from "../models/car.model";
import {ContactModel} from "../models/contact.model";
import {AddressModel} from "../models/address.model";
import {MessageModel} from "../models/message.model";

export class MyProfileModel {
  id: string;
  username: string;
  name: string;
  lastName: string;
  enabled: boolean;
  createdDate: Date;
  updatedDate: Date;
  loginsHistory: Date[];
  carsList: CarModel[];
  contact: ContactModel;
  address: AddressModel;
  points: number;
  friendsList: string[];
  messages: Map<string, MessageModel[]>


  constructor(id: string, username: string, name: string, lastName: string, enabled: boolean, createdDate: Date, updatedDate: Date, loginsHistory: Date[], carsList: CarModel[], contact: ContactModel, address: AddressModel, points: number, friendsList: string[], messages: Map<string, MessageModel[]>) {
    this.id = id;
    this.username = username;
    this.name = name;
    this.lastName = lastName;
    this.enabled = enabled;
    this.createdDate = createdDate;
    this.updatedDate = updatedDate;
    this.loginsHistory = loginsHistory;
    this.carsList = carsList;
    this.contact = contact;
    this.address = address;
    this.points = points;
    this.friendsList = friendsList;
    this.messages = messages;
  }
}
