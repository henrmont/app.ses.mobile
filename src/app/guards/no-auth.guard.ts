import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const noAuthGuard: CanActivateFn = (childRoute, state) => {
  const router = inject(Router);
  const user = inject(AuthService).me()
  const token = window.localStorage.getItem('token')

  if (token) {
    return new Observable<boolean>(obs => {
      user.subscribe({
        next: (response) => {
          if (response.email_verified_at) {
            obs.next(false);
            router.navigate(['/app'])
          } else {
            obs.next(true);
          }
        },
        error: () => {
          obs.next(false);
          window.localStorage.clear();
          router.navigate(['/auth'])
        }
      })
    });
  } else {
    router.navigate(['/auth'])
    return false
  }

};
