import { CurrencyPipe, JsonPipe, NgClass } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from '../book';
import { BooksFilterPipe } from "../books-filter-pipe";
import { Rating } from "../../shared/rating/rating";
import { runde, limit } from '../../shared/math.helper';
import { BookData } from '../book-data';



@Component({
  selector: 'book-list',
  imports: [NgClass, FormsModule, CurrencyPipe, BooksFilterPipe, Rating, JsonPipe],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList implements OnInit {

  breite: number = 50;
  showCover: boolean = true;
  filterValue: string = '';

  books: Array<Book>= [];



  constructor(private bookDataService: BookData) {
    console.log('BookList constructor');
  }

  ngOnInit(){
    console.log('BookList ngOnInit');
    this.books= this.bookDataService.getBooks();
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
    const book = this.books.find((book: Book) => book.isbn === isbn);
    if (book) {
      book.rating = runde(limit(book.rating + delta, 1, 5));   book.rating + delta;
    }
  }

}
