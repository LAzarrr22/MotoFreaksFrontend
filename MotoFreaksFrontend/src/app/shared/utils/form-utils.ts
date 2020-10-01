import {AbstractControl, FormGroup} from '@angular/forms';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormUtils {
  private defaultMessages = {
    required: 'This field is required',
    email: 'Not valid e-mail address',
    minlength: 'Field value is too short',
    maxlength: 'Field value is too long',
    pattern: 'Field value has incorrect format',
  };

  shouldShowErrors(control: AbstractControl | string, form: null | FormGroup = null) {
    if (!(control instanceof AbstractControl)) {
      control = form.get(control);
    }
    if (control) {
      return control.invalid && (control.touched || control.dirty);
    } else {
      console.warn('Control ' + control + ' not found when checking for errors');
      return false;
    }
  }

  getErrorMsgs(controlName: string, form: FormGroup, messages: any): string[] {
    const control = form.get(controlName);
    const values = {};
    const result: string[] = [];
    if (control.errors != null && Object.keys(control.errors).length > 0) {
      Object.assign(values, this.defaultMessages);
      Object.assign(values, messages);
      for (const name of Object.keys(control.errors)) {
        let msg: string = null;
        const forControl = values[controlName];
        if (forControl) {
          msg = forControl[name];
        }

        if (msg == null) {
          msg = values[name];
        }
        if (msg) {
          result.push(msg);
        }
      }
    }
    return result;
  }

  showAllFormErrors(form: FormGroup) {
    (<any>Object).values(form.controls).forEach(control => {
      control.markAsDirty();
    });
  }

  setControlsValues(form: FormGroup, values: {}, controlsList: string[] = null) {
    if (controlsList == null || controlsList.length === 0) {
      controlsList = Object.keys(form.controls);
    }
    for (const name of controlsList) {
      const abstractControl = form.get(name);
      if (abstractControl) {
        abstractControl.setValue(values[name]);
      }
    }
    return form;
  }

  controlFieldChanged(prev, controlsKey, next) {
    return prev && prev[controlsKey] != next[controlsKey];
  }

  scrollToInvalidElement() {
    const firstElementWithError = document.querySelector('.ng-invalid');
    if (firstElementWithError) {
      firstElementWithError.scrollIntoView({behavior: 'smooth'});
    }
  }

}
