import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookData } from '../book-data';
import { Book } from '../book';

@Component({
  selector: 'book-book-detail',
  imports: [],
  templateUrl: './book-detail.html',
  styleUrl: './book-detail.css',
})
export class BookDetail implements OnInit {
  isbn: string = '';
  book: Book | null = null;

  constructor(private route: ActivatedRoute, private bookDataService: BookData) {
    // async
    this.route.params.subscribe((params) => {
      console.log(params);
      this.isbn = params['isbn'];
    });

    this.isbn = this.route.snapshot.paramMap.get('isbn') || '';
  }

  async ngOnInit(): Promise<void> {
    try {
      this.book = await this.bookDataService.getBook(this.isbn);
      console.log('ngOnInit', this.book);
    } catch (error) {
      console.error('Fehler beim Laden des Buches', error);
    }
  }

  ngOnInitOhneAsync() {
    const promiseBook = this.bookDataService.getBook(this.isbn);
    promiseBook.then((book) => {
      this.book = book;
      console.log('ngOnInitOhneAsync', this.book);
    }).catch((error) => {
      console.error('Fehler beim Laden des Buches', error);
    });
  }

}
