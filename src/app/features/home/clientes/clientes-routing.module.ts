import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesDetalleComponent } from './clientes-detalle/clientes-detalle.component';
import { ClientesComponent } from './clientes.component';

const routes: Routes = [
  {
    path: '',
    component: ClientesComponent,
  },
  {
    path: 'detalle/:clienteId',
    component: ClientesDetalleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
