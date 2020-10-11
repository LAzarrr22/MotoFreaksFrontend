export class MergeUserModel {

  name: string;
  lastName: string;
  enabled: boolean;


  constructor(name: string, lastName: string, enabled: boolean) {
    this.name = name;
    this.lastName = lastName;
    this.enabled = enabled;
  }
}
