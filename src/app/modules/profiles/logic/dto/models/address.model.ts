export class AddressModel {
  country: string;
  state: string;
  city: string;
  street: string;


  constructor(country: string, state: string, city: string, street: string) {
    this.country = country;
    this.state = state;
    this.city = city;
    this.street = street;
  }
}
