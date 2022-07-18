import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'categorias',
        loadChildren: () =>
          import('./categorias/categorias.module').then(
            (m) => m.CategoriasModule
          ),
      },
      {
        path: 'clientes',
        loadChildren: () =>
          import('./clientes/clientes.module').then((m) => m.ClientesModule),
      },
      {
        path: 'productos',
        loadChildren: () =>
          import('./productos/productos.module').then((m) => m.ProductosModule),
      },
      {
        path: 'servicios',
        loadChildren: () =>
          import('./servicios/servicios.module').then((m) => m.ServiciosModule),
      },
      {
        path: 'ventas',
        loadChildren: () =>
          import('./ventas/ventas.module').then((m) => m.VentasModule),
        data: { title: 'Example' },
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'clientes',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
