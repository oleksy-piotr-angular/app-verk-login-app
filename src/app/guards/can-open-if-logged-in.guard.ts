import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

// a guard that checks if the user is authenticated
export const canOpenIfLoggedInGuard: CanActivateFn = () => {
  const isAuthenticated = inject(AuthService).isAuthenticated();
  if (!isAuthenticated) {
    // redirect to login page if is not authenticated
    inject(Router).navigate(['/login']);
  }
  return isAuthenticated;
};
