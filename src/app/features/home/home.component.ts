import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PageService } from 'src/app/shared/services/page.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(public pageService: PageService, private cd: ChangeDetectorRef) {
    //
  }

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    this.cd.detectChanges();
  }
}
