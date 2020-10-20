import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.scss']
})
export class NewMessageComponent implements OnInit {

  @Input()
  receiverID: string

  form = new FormGroup({
    message: new FormControl('', [Validators.required])
  })

  constructor() {
  }

  ngOnInit(): void {
  }

  sendMessage() {
    if (this.form.valid) {

    }

  }
}
