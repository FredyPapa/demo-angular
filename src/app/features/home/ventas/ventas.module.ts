import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentasRoutingModule } from './ventas-routing.module';
import { VentasComponent } from './ventas.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [VentasComponent],
  imports: [CommonModule, VentasRoutingModule, HttpClientModule],
  providers: [],
})
export class VentasModule {}
