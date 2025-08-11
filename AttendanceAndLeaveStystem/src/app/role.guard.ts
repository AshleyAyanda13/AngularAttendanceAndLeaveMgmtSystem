import { CanActivateFn, Router } from '@angular/router';
import { AuthStateService } from './services/auth-state.service';
import { inject } from '@angular/core';

export const roleGuard: CanActivateFn = (route, state) => {


  const authState = inject(AuthStateService);
  const router = inject(Router);

  const expectedRole = route.data['role']; // e.g. 'ROLE_EMPLOYEE'
  const actualRole = authState.getRole();  // Your method to get current user role

  if (expectedRole && actualRole === expectedRole) {
    return true;
  }

  // Redirect to unauthorized page
  router.navigate(['/unauthorized']);
  return false;


  
};
