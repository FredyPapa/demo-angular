import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-nav-links',
  templateUrl: './sidebar-nav-links.component.html',
  styleUrls: ['./sidebar-nav-links.component.scss'],
})
export class SidebarNavLinksComponent implements OnInit {
  navegation = [
    {
      path: '/categorias',
      title: 'Categorias',
      icon: 'fa fa-id-card-o'
    },
    {
      path: '/clientes',
      title: 'Clientes',
      icon: 'fa fa-telegram'
    },
    {
      path: '/productos',
      title: 'Productos',
      icon: 'fa fa-car'
    },
    {
      path: '/servicios',
      title: 'Servicios',
      icon: 'fa fa-birthday-cake'
    },
    {
      path: '/ventas',
      title: 'Ventas',
      icon: 'fa fa-cog'
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
