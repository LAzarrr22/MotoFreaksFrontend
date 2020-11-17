export class CommentModel {

  id:string;
  context:string;
  creatorId:string;
  createdDate: Date;
  approved: string[];
  rejected: string[];


  constructor(id: string, context: string, creatorId: string, createdDate: Date, approved: string[], rejected: string[]) {
    this.id = id;
    this.context = context;
    this.creatorId = creatorId;
    this.createdDate = createdDate;
    this.approved = approved;
    this.rejected = rejected;
  }
}
