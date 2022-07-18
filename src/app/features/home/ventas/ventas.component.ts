import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { catchError, from, interval, map, of, Subject, takeUntil } from 'rxjs';
import { ajax } from 'rxjs/ajax';

import { Modal } from 'bootstrap';
import { PageService } from 'src/app/shared/services/page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css'],
  host: {
    class: 'page-content bg-red',
  },
})
export class VentasComponent implements OnInit {
  unsubcribe: Subject<void> = new Subject();
  fromModal!: Modal;
  messageError!: string;
  constructor(private pageService: PageService, private router: Router) {}
  
  ngOnInit(): void {
    // const data = from(fetch('/assets/data.json'));
    // data.subscribe({
    //   next: async (response) => console.log(await response.json()),
    //   error: (err) => console.log(err),
    //   complete: () => console.log('Completado'),
    // });

    // const counter = interval(1000);
    // counter
    //   .pipe(takeUntil(this.unsubcribe))
    //   .subscribe((value) => console.log(value));

    const apiData = ajax('/assets/data.json');
    apiData
      .pipe(
        // map((res) => {
        //   console.log(res);
        //   throw new Error('No se encontro ninguna informacion');
        // }),
        // catchError((error) => {
        //   this.messageError = error;
        //   return of([]);
        // })
        map((value: any) => value.response),
        map((value: any[]) => value.map((x: any) => x.name))
      )
      .subscribe({
        next: (data) => console.log('data, ', data),
        error: (error) => console.log(error),
      });

    this.fromModal = new Modal(
      document.getElementById('exampleModal') as Element,
      {
        keyboard: false,
      }
    );
    console.log(this.router);
    this.pageService.titlePage.next('Pagina de ventas');
  }

  onClickModal() {
    this.fromModal.show();
  }

  onClickSave() {
    this.fromModal.hide();
  }

  onClickStop() {
    this.unsubcribe.next();
    this.unsubcribe.complete();
  }
}
