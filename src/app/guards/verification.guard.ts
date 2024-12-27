import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const verificationGuard: CanActivateChildFn = (childRoute, state) => {
  const router = inject(Router);
  const user = inject(AuthService).me()
  const token = window.localStorage.getItem('token')

  return new Observable<boolean>(obs => {
    user.subscribe({
      next: (response) => {
        if (response.email_verified_at && response.is_valid && token) {
          obs.next(true);
        } else if (!response.email_verified_at) {
          obs.next(false);
          router.navigate(['/auth/verification'])
        } else {
          obs.next(false);
          window.localStorage.clear();
          router.navigate(['/auth'])
        }
      },
      error: () => {
        obs.next(false);
        window.localStorage.clear();
        router.navigate(['/auth'])
      }
    })
  });
};