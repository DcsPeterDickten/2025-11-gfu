import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './book';

@Pipe({
  name: 'bookFilter'
})
export class BooksFilterPipe implements PipeTransform {
  transform(books: Book[], filterValue:string = ''): Book[] {
    const searchValue = filterValue.toLowerCase();
    const gefilterteBuecher =
      books.filter((book) =>
          book.title.toLowerCase().includes(searchValue));
    return gefilterteBuecher;
  }
}
