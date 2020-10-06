export class AddressModel {
  country: string;
  city: string;
  street: string;


  constructor(country: string, city: string, street: string) {
    this.country = country;
    this.city = city;
    this.street = street;
  }
}
