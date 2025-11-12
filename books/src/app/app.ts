import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookList } from './books/book-list/book-list';

@Component({
  selector: 'book-root',
  imports: [RouterOutlet, BookList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class Katze {
  // protected readonly title = signal('books');
  protected readonly title: string = 'books';
}
