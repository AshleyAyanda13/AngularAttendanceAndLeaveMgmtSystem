import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms'; // Import FormsModule
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { ApiServiceService } from '../../services/api-service.service';
import { RouterLink, Router } from '@angular/router'; // Import Router
import { AuthStateService } from '../../services/auth-state.service';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink], // Added ReactiveFormsModule
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {
  loginForm = new FormGroup({
    Email: new FormControl('', [Validators.required, Validators.email]),
    Password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });
  error: string = "";
  holder: any;
  role:any;
  constructor(private apiService: ApiServiceService, private router: Router,private authState: AuthStateService) {} // Inject Router

  onLogin(): void {
    if (this.loginForm.invalid) {
      return;
    }
    const payload = {
      email: this.loginForm.value.Email,
      password: this.loginForm.value.Password
    };

    this.apiService.postData(payload).subscribe({
      next: (response) => {
        this.error = "";

       
       
        localStorage.setItem('jwtToken', response.Token);
     this.apiService.getLoggedInUserRole().subscribe({
      next: (response) => {
        
 this.role= response.role.replace("ROLE_", "");
 
        this.authState.setRole(this.role);
        this.holder=this.authState.getRole();
if (this.holder === 'EMPLOYEE') {
          this.router.navigate(['/home']);
        } else if (this.holder === 'SUPERVISOR') {
          this.router.navigate(['/supervisorpage']);
        }
        

    
       
      },
      error: (err) => {
         
      }
    });

 



        
      },
      error: (err) => {
        if (err.error) {
          this.error = "Invalid Login";
          console.log('Error response:', err.error);
        }
      }
    });
  }
}



