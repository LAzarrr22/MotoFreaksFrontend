export class NewSentenceModel {
  id:string;
  name:string;
  translation: string;

  constructor(id: string, name: string, translation: string) {
    this.id = id;
    this.name = name;
    this.translation = translation;
  }
}
