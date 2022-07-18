import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  titlePage: Subject<string>;
  
  constructor() { 
    this.titlePage = new Subject();
  }
}
