import { Routes } from '@angular/router';
import { Start } from './books/start/start';
import { BookList } from './books/book-list/book-list';
import { Calculator } from './shared/calculator/calculator';
import { BookDetail } from './books/book-detail/book-detail';
import { bookGuard } from './books/book-guard';

export const routes: Routes = [
{ path: '', component: Start },
{ path: 'books', component: BookList },
{ path: 'books/:isbn', component: BookDetail, canActivate: [bookGuard] },
{ path: 'calculator', component: Calculator },
{ path: '**', redirectTo: '' },
];
