import { CanActivateFn } from '@angular/router';
import { Authservice } from '../services/authservice';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const auth = inject(Authservice);
  const router = inject(Router);

 return auth.isAuthenticated() ? true : router.createUrlTree(['/login']);

};
