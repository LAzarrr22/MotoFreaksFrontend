import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommentModel} from "../../logic/dto/model/comment.model";
import {UsersService} from "../../../users/logic/services/users.service";

@Component({
  selector: 'app-comments-list-item',
  templateUrl: './comments-list-item.component.html',
  styleUrls: ['./comments-list-item.component.scss']
})
export class CommentsListItemComponent implements OnInit {

  @Input()
  comment: CommentModel;
  @Input()
  myId: string;
  @Output()
  reviewComment=new EventEmitter<boolean>()
  @Output()
  deleteCommentEvent=new EventEmitter<boolean>()

  currentApproved:string[];
  currentRejected:string[];

  constructor(private userService:UsersService) { }

  ngOnInit(): void {
    this.currentApproved=this.comment.approved;
    this.currentRejected=this.comment.rejected;
  }

  getName(){
    return this.userService.getName(this.comment.creatorId)
  }
  getLastName(){
    return this.userService.getLastName(this.comment.creatorId)
  }

  approveComment() {
    if(!this.checkIdAtList(this.currentApproved)) {
      this.currentApproved = [...this.currentApproved, this.myId]
        this.reviewComment.emit(true)
    }
  }

  rejectComment() {
    if(!this.checkIdAtList(this.currentRejected)){
      this.currentRejected=[...this.currentRejected,this.myId]
      this.reviewComment.emit(false)
    }

  }

  checkIdAtList(list:string[]):boolean{
    return !!list.find(item=>item==this.myId)
  }

  deleteComment() {
    this.deleteCommentEvent.emit()
  }
}
