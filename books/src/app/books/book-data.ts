import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root',
})
export class BookData {

  async getBooks(): Promise<Array<Book>> {
    const response = await fetch('http://localhost:3000/books');
    const data = await response.json();
    return data;
  }

  async getBook(isbn: string): Promise<Book> {
    const response = await fetch(`http://localhost:3000/books/${isbn}`);
    const data = await response.json();
    return data;
  }
}
