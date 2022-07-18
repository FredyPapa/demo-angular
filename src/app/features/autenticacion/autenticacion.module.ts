import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutenticacionRoutingModule } from './autenticacion-routing.module';
import { AutenticacionComponent } from './autenticacion.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';


@NgModule({
  declarations: [
    AutenticacionComponent
  ],
  imports: [
    CommonModule,
    AutenticacionRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService]
})
export class AutenticacionModule { }
