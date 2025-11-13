import { Injectable } from '@angular/core';
import { Book } from './book';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookData {

  constructor(private http: HttpClient) {}

  async getBooks(): Promise<Array<Book>> {
    const response = await fetch('http://localhost:3000/books');
    const data = await response.json();
    return data;
  }

  async getBook(isbn: string): Promise<Book> {
    const obs$ = this.http.get<Book>(`http://localhost:3000/books/${isbn}`);
    return await firstValueFrom(obs$) as Book; //  as Promise<Book>;
  }

  async deleteBook(isbn: string): Promise<string> {
    const response = await fetch(`http://localhost:3000/books/${isbn}`, {method: 'DELETE'});
    const data = await response.json();
    return data;
  }


}
