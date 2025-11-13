import { Book } from './book';
import { BooksFilterPipe } from './books-filter-pipe';

describe('BooksFilterPipe', () => {
  const books: Book[] = [
    {
      isbn: '123',
      title: 'Angular 19',
      price: 10,
      rating: 4,
      coverUrl: 'https://angular.io/assets/images/logos/angular/angular.svg',
    },
    {
      isbn: '234',
      title: 'Angular 20',
      price: 15,
      rating: 4,
      coverUrl: 'https://angular.io/assets/images/logos/angular/angular.svg',
    },
    {
      isbn: '345',
      title: 'Angular 21',
      price: 20,
      rating: 4,
      coverUrl: 'https://angular.io/assets/images/logos/angular/angular.svg',
    },
  ];

  let pipe: BooksFilterPipe;

  beforeEach(() => {
    pipe = new BooksFilterPipe();
  });

  it('should handle empty book lists', () => {
    const books: Book[] = [];
    const result = pipe.transform(books, 'test');
    expect(result).toEqual([]);
  });

  it('should filter books by title', () => {
    const result = pipe.transform(books, 'Angular 19');
    expect(result?.length).toEqual(1);
    expect(result?.[0]?.title).toEqual('Angular 19');
  });

  it('should filter books by title case insensitive', () => {
    const result = pipe.transform(books, 'angular 19');
    expect(result?.length).toEqual(1);
    expect(result?.[0]?.title).toEqual('Angular 19');
  });

  it('should work with empty filter value', () => {
    const result = pipe.transform(books, '');
    expect(result?.length).toEqual(books.length);
  });

  it('should work with undefined filter value', () => {
    const result = pipe.transform(books, undefined);
    expect(result?.length).toEqual(books.length);
  });

  it('should filter books by partial title match', () => {
    const result = pipe.transform(books, 'Angular');
    expect(result?.length).toEqual(3);
    expect(result?.every(book => book.title.includes('Angular'))).toBe(true);
  });

  it('should return empty array when no books match', () => {
    const result = pipe.transform(books, 'React');
    expect(result?.length).toEqual(0);
    expect(result).toEqual([]);
  });

  it('should handle filter with whitespace (whitespace is preserved in search)', () => {
    const result = pipe.transform(books, 'Angular 19');
    expect(result?.length).toEqual(1);
    expect(result?.[0]?.title).toEqual('Angular 19');
    // Note: Leading/trailing whitespace in filter would not match due to includes() behavior
    const resultWithSpaces = pipe.transform(books, '  Angular 19  ');
    expect(resultWithSpaces?.length).toEqual(1);
  });

  it('should filter by substring in the middle of title', () => {
    const result = pipe.transform(books, '19');
    expect(result?.length).toEqual(1);
    expect(result?.[0]?.title).toEqual('Angular 19');
  });

  it('should filter by number in title', () => {
    const result = pipe.transform(books, '20');
    expect(result?.length).toEqual(1);
    expect(result?.[0]?.title).toEqual('Angular 20');
  });

  it('should handle filter with special characters', () => {
    const booksWithSpecialChars: Book[] = [
      {
        isbn: '456',
        title: 'Angular & TypeScript',
        price: 25,
        rating: 5,
        coverUrl: 'https://angular.io/assets/images/logos/angular/angular.svg',
      },
    ];
    const result = pipe.transform(booksWithSpecialChars, '&');
    expect(result?.length).toEqual(1);
    expect(result?.[0]?.title).toEqual('Angular & TypeScript');
  });

  it('should return all books when filter matches all', () => {
    const result = pipe.transform(books, 'Angular');
    expect(result?.length).toEqual(books.length);
  });

  it('should handle null filter value', () => {
    const result = pipe.transform(books, null as any);
    expect(result?.length).toEqual(books.length);
  });
});
