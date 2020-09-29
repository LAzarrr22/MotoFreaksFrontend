export class RegisterModel {
  name: string;
  lastName: string;
  password: string;
  username: string;


  constructor(name: string, lastName: string, password: string, username: string) {
    this.name = name;
    this.lastName = lastName;
    this.password = password;
    this.username = username;
  }
}
