export class SentenceModel {

  id:string;
  name:string;
  translation:string;
  creatorId:string;
  updatedById:string;
  createdDate:string;
  updatedDate:string;


  constructor(id: string, name: string, translation: string, creatorId: string, updatedById: string, createdDate: string, updatedDate: string) {
    this.id = id;
    this.name = name;
    this.translation = translation;
    this.creatorId = creatorId;
    this.updatedById = updatedById;
    this.createdDate = createdDate;
    this.updatedDate = updatedDate;
  }
}
