export class MergeUserModel {

  name: string;
  lastName: string;
  enabled: boolean;
  password: string;

  constructor(name: string, lastName: string, enabled: boolean, password: string) {
    this.name = name;
    this.lastName = lastName;
    this.enabled = enabled;
    this.password = password;
  }
}
