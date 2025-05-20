
import { CanActivateFn } from '@angular/router';

export const canActivateGuard: CanActivateFn = () => {
  const token = localStorage.getItem('token');
  return !!token;
};
