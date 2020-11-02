import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.scss']
})
export class NewMessageComponent implements OnInit {


  @Output()
  sendMessageEvent = new EventEmitter<string>();

  form = new FormGroup({
    message: new FormControl('')
  })

  constructor() {
  }

  ngOnInit(): void {
  }

  sendMessage() {

    if (this.form.valid) {
      this.sendMessageEvent.emit(this.getText())
      this.form.controls.message.setValue('');
    }
  }

  getText() {
    return this.form.controls.message.value;
  }

}
