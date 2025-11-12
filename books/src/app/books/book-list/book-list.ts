import { CurrencyPipe, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from '../book';
import { BooksFilterPipe } from "../books-filter-pipe";
import { Rating } from "../../shared/rating/rating";

@Component({
  selector: 'book-list',
  imports: [NgClass, FormsModule, CurrencyPipe, BooksFilterPipe, Rating],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList implements OnInit {

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

  constructor() {
    console.log('BookList constructor');
  }

  ngOnInit(){
    console.log('BookList ngOnInit');
  }

  toggleCover() {
    this.showCover = !this.showCover;
  }

  rateUp(isbn: string) {
    console.log('rateUp', isbn);
    this.changeRating(isbn, 0.1);
  }

  rateDown(isbn: string) {
    console.log('rateDown', isbn);
    this.changeRating(isbn, -0.1);
  }

  changeRating(isbn: string, delta: number) {
    console.log('changeRating', isbn, delta);
    const books = this.books.filter((book: Book) => book.isbn === isbn);
    if (books.length > 0) {
      const book = books[0];
      book.rating = book.rating + delta;
      book.rating = Math.max(book.rating, 1)
      book.rating = Math.min(book.rating, 5);
      book.rating = +book.rating.toFixed(1);
    }
  }

}
