import {getAllUsers, UsersState} from "../reducers/users.reducers";
import {Store} from "@ngrx/store";
import {AddFriend, GetAllUsers} from "../action/user.action";
import {Injectable} from "@angular/core";
import {GetMyFriends} from "../../../profiles/logic/action/my-profile.action";

@Injectable()
export class UsersService {

  constructor(private store: Store<UsersState>) {

  }

  getAllUsers() {
    this.store.dispatch(new GetAllUsers())
    return this.store.select(getAllUsers);
  }

  addFriend(id: string) {
    this.store.dispatch(new AddFriend(id));
    this.store.dispatch(new GetAllUsers());
    this.store.dispatch(new GetMyFriends());
  }

}
