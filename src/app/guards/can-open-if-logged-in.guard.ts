import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

//guard to prevent unauthorized opening of a given route path
export const canOpenIfLoggedInGuard: CanActivateFn = () => {
  return inject(AuthService).isAuthenticated();
};
