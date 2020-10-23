import {PostType} from "../../enums/post-type.enum";
import {AddressModel} from "../../../../profiles/logic/dto/models/address.model";
import {CarModel} from "../../../../profiles/logic/dto/models/car.model";

export class NewPostModel {

  type: PostType;
  title: string;
  body: string;
  location: AddressModel;
  car: CarModel;


  constructor(type: PostType, title: string, body: string, location: AddressModel, car: CarModel) {
    this.type = type;
    this.title = title;
    this.body = body;
    this.location = location;
    this.car = car;
  }
}
