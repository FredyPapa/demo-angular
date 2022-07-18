import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { PipesModule } from './pipes/pipes.module';

import { DirectivesModule } from './directives/directives.module';
@NgModule({
  declarations: [],
  imports: [CommonModule, ComponentsModule, PipesModule, DirectivesModule],
  exports: [ComponentsModule, PipesModule, DirectivesModule],
})
export class SharedModule {}
