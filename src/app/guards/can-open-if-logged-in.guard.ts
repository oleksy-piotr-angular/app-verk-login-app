import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

// a guard that checks if the user is authenticated
export const canOpenIfLoggedInGuard: CanActivateFn = () => {
  return inject(AuthService).isAuthenticated();
};
