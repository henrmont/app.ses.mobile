import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (childRoute, state) => {
  const router = inject(Router);
  const token = window.localStorage.getItem('token')

  if (token) {
    router.navigate(['/auth/verification'])
    return false
  } else {
    return true
  }
};
