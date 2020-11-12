import {PostType} from "../../enums/post-type.enum";
import {AddressModel} from "../../../../profiles/logic/dto/models/address.model";
import {CarModel} from "../../../../profiles/logic/dto/models/car.model";
import {PostState} from "../../enums/post-state.enum";

export class PostModel {

  id: string;
  type: PostType;
  title: string;
  body: string;
  createdDate: Date;
  creatorId: string;
  state: PostState;
  userIdLikes: string[];
  location: AddressModel;
  car: CarModel;


  constructor(id: string, type: PostType, title: string, body: string, createdDate: Date, creatorId: string, state: PostState, userIdLikes: string[], location: AddressModel, car: CarModel) {
    this.id = id;
    this.type = type;
    this.title = title;
    this.body = body;
    this.createdDate = createdDate;
    this.creatorId = creatorId;
    this.state = state;
    this.userIdLikes = userIdLikes;
    this.location = location;
    this.car = car;
  }
}

