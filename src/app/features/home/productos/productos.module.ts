import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosComponent } from './productos.component';
import {NgFileDragDropModule} from  'ng-file-drag-drop';

@NgModule({
  declarations: [ProductosComponent],
  imports: [CommonModule, ProductosRoutingModule, NgFileDragDropModule],
})
export class ProductosModule {}
