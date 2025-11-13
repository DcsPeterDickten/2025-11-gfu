import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, timer } from 'rxjs';

@Component({
  selector: 'book-start',
  imports: [AsyncPipe],
  templateUrl: './start.html',
  styleUrl: './start.css',
})
export class Start {

  obs3$: Observable<number> = timer(0,500);

  constructor() {
    this.obs3$.subscribe(console.log);
  }
}
