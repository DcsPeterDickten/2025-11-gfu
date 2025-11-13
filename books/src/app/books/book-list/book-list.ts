import { CurrencyPipe, NgClass } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { limit, runde } from '../../shared/math.helper';
import { Rating } from "../../shared/rating/rating";
import { Book } from '../book';
import { BookData } from '../book-data';
import { BooksFilterPipe } from "../books-filter-pipe";
import { RouterLink } from '@angular/router';

@Component({
  imports: [NgClass, FormsModule, CurrencyPipe, BooksFilterPipe, Rating, RouterLink],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList implements OnInit, OnDestroy {

  breite: number = 50;
  showCover: boolean = true;
  filterValue: string = '';
  books: Array<Book>= [];

  constructor(private bookDataService: BookData) {
    console.log('BookList constructor');
  }

  ngOnDestroy(): void {
    console.log('BookList ngOnDestroy');
  }

  async ngOnInit(){
    this.books= await this.bookDataService.getBooks();
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

  async deleteBook(isbn: string) {
    await this.bookDataService.deleteBook(isbn);
    this.books= await this.bookDataService.getBooks();
  }
}
