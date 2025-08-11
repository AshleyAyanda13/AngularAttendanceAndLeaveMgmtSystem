import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {

 private readonly ROLE_KEY = 'userRole';
  private roleSubject = new BehaviorSubject<string | null>(this.getStoredRole());
// Observable for components to subscribe to
  role$: Observable<string | null> = this.roleSubject.asObservable();


  // Set role
  setRole(role: string) {
    this.roleSubject.next(role);
     localStorage.setItem(this.ROLE_KEY, role);
  }

  // Get current role value
  getRole(): string | null {
    return this.roleSubject.getValue();
  }

  // Clear role (e.g., on logout)
  clearRole() {
    this.roleSubject.next(null);
    localStorage.removeItem(this.ROLE_KEY); 
  }
  constructor() { }
    private getStoredRole(): string | null {
    return localStorage.getItem(this.ROLE_KEY); // Read from localStorage
  }
}
