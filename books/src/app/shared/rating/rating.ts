import { Component } from '@angular/core';

@Component({
  selector: 'rating',
  imports: [],
  templateUrl: './rating.html',
  styleUrl: './rating.css',
})
export class Rating {
  id: string = '';
  stars: number = 0;

  rateUp() {
    console.log('rateUp', this.id, this.stars);
  }
  rateDown() {
    console.log('rateDown', this.id, this.stars);
  }

}
