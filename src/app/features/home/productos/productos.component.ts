import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  dragDropConfig = {
    showList: true,
    showProgress: false,
  };
  constructor() {}

  ngOnInit(): void {}

  getUploadedFiles(event: any) {
    console.log(event);
  }
}
