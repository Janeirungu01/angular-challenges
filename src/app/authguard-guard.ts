import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Authservice } from './authservice';

export const authguardGuard: CanActivateFn = () => {
  const auth = inject(Authservice);
  const router = inject(Router);

  if (auth.isAuthenticated()) {
    return true; 
  }

  return router.createUrlTree(['/login']);
  
  //ternary operator
  // return auth.isAuthenticated() ? true : router.createUrlTree(['/login']);
};



