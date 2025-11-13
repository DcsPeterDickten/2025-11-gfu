import { CanActivateFn } from '@angular/router';

export const bookGuard: CanActivateFn = (route, state) => {
  console.log('bookGuard', route, state);
  const isbn = route.params['isbn'];
  return isbn !== '123';
};
