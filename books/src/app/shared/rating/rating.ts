import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'rating',
  imports: [],
  templateUrl: './rating.html',
  styleUrl: './rating.css',
})
export class Rating implements OnInit, OnChanges {
  @Input()
  id: string = '';

  @Input()
  stars: number = 0;

  @Output()
  plusWasClicked: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  minusWasClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    console.log('Rating ngOnInit', this.id, this.stars);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Rating ngOnChanges', this.id, changes);
  }

  rateUp() {
    this.plusWasClicked.emit(this.id);
  }
  rateDown() {
    this.minusWasClicked.emit(this.id);
  }

}
