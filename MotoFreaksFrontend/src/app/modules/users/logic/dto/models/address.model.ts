export class AddressModel {
  country: string;
  city: string;
  street: string;
  state: string;


  constructor(country: string, city: string, street: string, state: string) {
    this.country = country;
    this.city = city;
    this.street = street;
    this.state = state;
  }
}
