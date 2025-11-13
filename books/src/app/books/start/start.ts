import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, filter, map, timer } from 'rxjs';

@Component({
  selector: 'book-start',
  imports: [AsyncPipe],
  templateUrl: './start.html',
  styleUrl: './start.css',
})
export class Start {

  obs3$: Observable<number> = timer(0,500);
  obs4$: Observable<number> | null = null;
  constructor() {
    this.obs4$ = this.obs3$.pipe(
      filter((value: number) => value % 2 === 0),
      map((value: number) => value * 10)
    );
  }
}
