export class RegisterModel {
  name: string;
  lastName: string;
  password: string;
  username: string;
  email: string;


  constructor(name: string, lastName: string, password: string, username: string, email: string) {
    this.name = name;
    this.lastName = lastName;
    this.password = password;
    this.username = username;
    this.email = email;
  }
}
