import {Component, Input} from '@angular/core';
import {ValidationMessageMap} from "../../../shared/interfaces/validation-message-map";
import {FormUtils} from "../../../shared/utils/form-utils";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'error-form',
  templateUrl: './error-form.component.html',
  styleUrls: ['./error-form.component.scss']
})
export class ErrorFormComponent {

  /*
	* `allMessages` map or single `message` and `error` string is required
	* */
  @Input() allMessages: ValidationMessageMap = {};
  @Input() message: string;
  @Input() error: string;
  @Input() form: FormGroup;
  @Input() control: string;

  constructor(public formUtils: FormUtils) {

  }

  canShowSingleMessage() {
    const c = this.form.get(this.control);
    const thisError = this.error ? c.hasError(this.error) : true;
    return (this.message && c && thisError);
  }
}
