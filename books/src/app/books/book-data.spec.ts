import { TestBed } from '@angular/core/testing';

import { BookData } from './book-data';
import { of } from 'rxjs';
import { Book } from './book';

describe('BookData', () => {
  let service: BookData;

  // beforeEach(() => {
  //   TestBed.configureTestingModule({});
  //   service = TestBed.inject(BookData);
  // });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });

  it('should get a book using an isbn', async () => {

    // Arrange
    const book: Book = {
      isbn: '123',
      title: 'Angular 18',
      price: 19,
      rating: 3.5,
      coverUrl: 'https://angular.io/assets/images/logos/angular/angular.svg',
    };
    const mockHttp = jasmine.createSpyObj('mockHttp', ['get']);
    const bookDataService = new BookData(mockHttp);
    mockHttp.get.and.returnValue(of(book));

    // Action
    const result = await bookDataService.getBook('123');

    // Assert
    expect(mockHttp.get).toHaveBeenCalledWith('http://localhost:3000/books/123');
  });


});
