import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar-nav-footer',
  templateUrl: './sidebar-nav-footer.component.html',
  styleUrls: ['./sidebar-nav-footer.component.scss']
})
export class SidebarNavFooterComponent implements OnInit {
  @Input() username!: string;
  @Input() userrol!: string;
  @Output() salir: EventEmitter<void> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClickSalir() {
    this.salir.emit();
  }

}
