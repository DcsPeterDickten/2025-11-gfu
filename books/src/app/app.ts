import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookList } from './books/book-list/book-list';
import { Calculator } from "./shared/calculator/calculator";

@Component({
  selector: 'book-root',
  imports: [RouterOutlet, BookList, Calculator],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class Katze {
  // protected readonly title = signal('books');
  protected readonly title: string = 'books';
}
