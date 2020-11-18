import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommentModel} from "../../logic/dto/model/comment.model";
import {PostsService} from "../../logic/services/posts.service";
import {PostState} from "../../logic/enums/post-state.enum";

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss']
})
export class CommentsListComponent implements OnInit {

  @Input()
  comments: CommentModel[];
  @Input()
  postId: string;
  @Input()
  myId: string;
  @Input()
  state: PostState;
  @Output()
  refreshPostsEvent=new EventEmitter();
  loadedComments: CommentModel[];
  currentShowComments: CommentModel[];
  loadedCount: number = 2;
  isShowMore: boolean;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.loadedComments=this.comments;
    if (this.loadedComments != undefined) {
      this.sliceComments();
    }
  }

  addComment(context:string){
      this.postsService.addComment(this.postId,context);
    this.sliceComments()
  }

  sliceComments() {
    if(this.loadedCount>this.loadedComments.length){
      this.loadedCount=this.loadedComments.length
    }
    if (this.loadedComments.length >= 3) {
      this.isShowMore = true;
      this.currentShowComments = this.loadedComments.slice(this.loadedComments.length - this.loadedCount, this.loadedComments.length);
    } else {
      this.currentShowComments = this.loadedComments;
    }
    if(this.loadedComments.length== this.currentShowComments.length){
      this.isShowMore = false;
    }
  }

  loadMore() {
    if (this.loadedComments.length >= 3) {
      this.loadedCount += 3;
    }
    this.sliceComments()
  }

  isOpen() {
    return this.state==PostState.OPEN;
  }

  showStartList() {
      this.loadedCount = 2;
    this.sliceComments()
    this.refreshPostsEvent.emit()
  }

  reviewComment($event: boolean, id: string) {
    if($event){
      this.postsService.approveComment(this.postId,id)
    }else{
      this.postsService.rejectComment(this.postId,id)
    }
  }

  deleteComment(commentEvent: CommentModel){
    this.loadedComments=this.loadedComments.filter(comment=>comment.id!==commentEvent.id)
    this.sliceComments()
    this.postsService.deleteComment(this.postId,commentEvent.id);
  }
}
