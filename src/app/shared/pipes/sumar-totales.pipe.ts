import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sumarTotales'
})
export class SumarTotalesPipe implements PipeTransform {

  transform(value: any, tofixed: number = 2): string {
    return (value.total1 + value.total2).toFixed(tofixed);
  }

}
