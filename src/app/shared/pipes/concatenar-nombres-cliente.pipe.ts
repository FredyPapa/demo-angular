import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concatenarNombresCliente'
})
export class ConcatenarNombresClientePipe implements PipeTransform {

  transform(value: any): any {
    return value.nombre + ' ' + value.apellidos;
  }

}
