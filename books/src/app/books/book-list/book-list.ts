import { CurrencyPipe, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from '../book';

@Component({
  selector: 'book-list',
  imports: [NgClass, FormsModule, CurrencyPipe],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList {

  breite: number = 50;
  showCover: boolean = true;
  filterValue: string = '';

  books: Array<Book>= [
    {
      isbn: '123',
      title: 'Angular 18',
      price: 19,
      rating: 3.5,
      coverUrl: 'https://m.media-amazon.com/images/I/71Wv+d6oP6L._AC_UY436_QL65_.jpg'
    },     {
      isbn: '124',
      title: 'Angular 19',
      price: 21,
      rating: 4.0,
      coverUrl: 'https://m.media-amazon.com/images/I/71wlgd2ShsL._SY522_.jpg'
    }, {
      isbn: '125',
      title: 'Angular 20',
      price: 25,
      rating: 4.5,
      coverUrl: 'https://m.media-amazon.com/images/I/71le4bCnY1L._SY522_.jpg'
    }
  ];

  toggleCover() {
    this.showCover = !this.showCover;
  }

}
