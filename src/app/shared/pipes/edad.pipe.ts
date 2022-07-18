import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';

@Pipe({
  name: 'edad'
})
export class EdadPipe implements PipeTransform {

  transform(value: string): unknown {
    const nacimiento = moment(value, 'DD/MM/YYYY');
    const hoy = moment();

    return hoy.diff(nacimiento, 'years');
  }

}
