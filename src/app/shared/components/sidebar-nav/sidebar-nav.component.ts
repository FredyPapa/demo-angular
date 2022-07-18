import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { SidebarNavLinksComponent } from '../sidebar-nav-links/sidebar-nav-links.component';

@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.scss']
})
export class SidebarNavComponent implements OnInit, AfterViewInit {

  @ViewChild(SidebarNavLinksComponent) comp!: SidebarNavLinksComponent;
  constructor() { }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit', this.comp);
  }

  ngOnInit(): void {
    console.log('ngOnInit', this.comp);
  }

  onSalir() {
    console.log('app-sidebar-nav');
  }

}
