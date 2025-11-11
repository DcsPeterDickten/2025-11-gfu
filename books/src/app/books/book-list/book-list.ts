import { Component } from '@angular/core';

@Component({
  selector: 'book-list',
  imports: [],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList {

  books = [
    {
      isbn: '123',
      title: 'Angular 18',
      price: 19,
      rating: 3.5
    },     {
      isbn: '124',
      title: 'Angular 19',
      price: 21,
      rating: 4.0
    }, {
      isbn: '125',
      title: 'Angular 20',
      price: 25,
      rating: 4.5
    }
  ];
}
