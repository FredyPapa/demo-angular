import { Component, Input, OnInit, AfterViewInit, ChangeDetectorRef, AfterContentInit } from '@angular/core';
import { PageService } from '../../services/page.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title!: string | null;

  ngOnInit(): void {}
}
