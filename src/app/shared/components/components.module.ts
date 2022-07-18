import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { SidebarNavComponent } from './sidebar-nav/sidebar-nav.component';
import { InfoUsuarioComponent } from './info-usuario/info-usuario.component';
import { SidebarNavHeaderComponent } from './sidebar-nav-header/sidebar-nav-header.component';
import { SidebarNavSearchComponent } from './sidebar-nav-search/sidebar-nav-search.component';
import { SidebarNavLinksComponent } from './sidebar-nav-links/sidebar-nav-links.component';
import { SidebarNavFooterComponent } from './sidebar-nav-footer/sidebar-nav-footer.component';
import { MainComponent } from './main/main.component';

const components = [
  HeaderComponent,
  FooterComponent,
  SidebarNavComponent,
  InfoUsuarioComponent,
  SidebarNavHeaderComponent,
  SidebarNavSearchComponent,
  SidebarNavLinksComponent,
  SidebarNavFooterComponent,
  MainComponent
];

@NgModule({
  declarations: [...components, ],
  exports: [...components],
  imports: [CommonModule, RouterModule],
  providers: []
})
export class ComponentsModule {}
