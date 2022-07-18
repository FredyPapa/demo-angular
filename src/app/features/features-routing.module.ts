import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivedGuard } from '../core/guards/actived.guard';
import { InactivedGuard } from '../core/guards/inactived.guard';
import { FeaturesComponent } from './features.component';

const routes: Routes = [
  { 
    path: '', 
    component: FeaturesComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
        canActivate: [InactivedGuard]
      },
      {
        path: 'auth',
        loadChildren: () => import('./autenticacion/autenticacion.module').then(m => m.AutenticacionModule),
        canActivate: [ActivedGuard]
      },
      { path: '**', loadChildren: () => import('./error-page/error-page.module').then(m => m.ErrorPageModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
