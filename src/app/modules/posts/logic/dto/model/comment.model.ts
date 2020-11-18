export class CommentModel {

  id:string;
  content:string;
  creatorId:string;
  createdDate: Date;
  approved: string[];
  rejected: string[];


  constructor(id: string, content: string, creatorId: string, createdDate: Date, approved: string[], rejected: string[]) {
    this.id = id;
    this.content = content;
    this.creatorId = creatorId;
    this.createdDate = createdDate;
    this.approved = approved;
    this.rejected = rejected;
  }
}
