import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'book-book-detail',
  imports: [],
  templateUrl: './book-detail.html',
  styleUrl: './book-detail.css',
})
export class BookDetail {

  isbn: string = '';

  constructor(private route: ActivatedRoute) {
    // async
    this.route.params.subscribe((params) => {
      console.log(params);
      this.isbn = params['isbn'];
    });

    this.isbn = this.route.snapshot.paramMap.get('isbn') || '';
 }

}
