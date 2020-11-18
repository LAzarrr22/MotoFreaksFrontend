import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {

  @Output()
  addCommentEvent = new EventEmitter<string>();

  form = new FormGroup({
    comment: new FormControl('')
  })

  constructor() {
  }

  ngOnInit(): void {
  }

  addComment() {

    if (this.form.valid) {
      this.addCommentEvent.emit(this.getText())
      this.form.controls.comment.setValue('');
    }
  }

  getText() {
    return this.form.controls.comment.value;
  }

}
