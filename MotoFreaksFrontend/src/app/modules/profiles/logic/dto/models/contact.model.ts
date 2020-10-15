export class ContactModel {
  email: string
  phone: string
  facebook: string
  instagram: string
  twitter: string
  skype: string
  youtube: string;


  constructor(email: string, phone: string, facebook: string, instagram: string, twitter: string, skype: string, youtube: string) {
    this.email = email;
    this.phone = phone;
    this.facebook = facebook;
    this.instagram = instagram;
    this.twitter = twitter;
    this.skype = skype;
    this.youtube = youtube;
  }
}
