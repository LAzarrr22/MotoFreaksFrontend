import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'empty'})
export class EmptyPipe implements PipeTransform {
  transform(value: any): any {
    if (value == null || value == '') {
      return '-'
    }
    return value
  }
}
