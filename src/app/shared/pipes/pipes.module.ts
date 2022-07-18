import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConcatenarNombresClientePipe } from './concatenar-nombres-cliente.pipe';
import { SumarTotalesPipe } from './sumar-totales.pipe';
import { EdadPipe } from './edad.pipe';

@NgModule({
  declarations: [ConcatenarNombresClientePipe, SumarTotalesPipe, EdadPipe],
  exports: [ConcatenarNombresClientePipe, SumarTotalesPipe, EdadPipe],
  imports: [CommonModule],
})
export class PipesModule {}
