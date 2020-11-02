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

    setTimeout(() => {
      this.store.dispatch(new GetAllUsers());
      this.store.dispatch(new GetMyFriends());
    }, 300)

  }

  getLastName(id: string): string {
    let lastName;
    this.store.select(getAllUsers).subscribe(users => {
      lastName = users.find(user => user.id === id).lastName;
    });

    return lastName;
  }

  getName(id: string): string {
    let name;
    this.store.select(getAllUsers).subscribe(users => {
      name = users.find(user => user.id === id).name;
    });

    return name;
  }
}
