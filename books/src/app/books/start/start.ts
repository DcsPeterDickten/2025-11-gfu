import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, ReplaySubject, Subject, Subscription, filter, map, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'book-start',
  imports: [AsyncPipe],
  templateUrl: './start.html',
  styleUrl: './start.css',
})
export class Start {

  obs3$: Observable<number> = timer(0,500);
  obs4$: Observable<number> | null = null;
  mySubject$: ReplaySubject<string> = new ReplaySubject<string>(1_000_000);
  mySubscriptions: Subscription[] = [];
  killSwitch$ = new Subject<string>();


  constructor() {
    this.obs4$ = this.obs3$.pipe(
      filter((value: number) => value % 2 === 0),
      map((value: number) => value * 10)
    );

    this.mySubject$.next('Hallo');
    this.mySubject$.next('Welt');

    this.mySubject$.subscribe(
      (nachricht: string) => console.log('BehaviorSubject sagt', nachricht)
    );

    this.mySubject$.next('Ende der Welt');
  }

  ngOnInit(): void {
     const obs$ = timer(0,500);
     const obs2$ = obs$.pipe(takeUntil(this.killSwitch$));
     obs2$.subscribe(console.log);
  }

  ngOnDestroy(): void {
    // this.mySubscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
    this.killSwitch$.next("He's dead Jim");
  }
}
