import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from '../../services/api-service.service';
import { CommonModule } from '@angular/common';
import { Route, Router, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
 
import { ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterModule,  ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  errors: any ;
  adderrors: { [key: string]: { description: string } } = {};
  successMessage: string = '';
  formSubmitted: boolean = false;
errorMessage: string = '';
  registrationForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    username: ['', [Validators.required, Validators.minLength(3),Validators.pattern(/^[A-Za-z]+$/)
]],
    Address: ['', [Validators.required, Validators.minLength(3),Validators.pattern(/^[A-Za-z0-9\s,'-\.]+$/)
]],
     surname: ['', [Validators.required, Validators.minLength(2),Validators.pattern(/^[A-Za-z]+$/)
]],
    DateOfBirth: ['', [Validators.required]],
    IDNumber: ['', [Validators.required, Validators.minLength(13),Validators.maxLength(13),Validators.pattern(/^\d+$/)]],
    Gender: ['', [Validators.required, Validators.minLength(4)]],
    NextOfKinName: ['', [Validators.required, Validators.minLength(3),Validators.pattern(/^[A-Za-z]+$/)
]],
    NextOfKinPhoneNumber: ['', [Validators.required, Validators.minLength(3),Validators.pattern(/^\d+$/)]], 
    PhoneNumber: ['', [Validators.required, Validators.minLength(10),Validators.maxLength(13),Validators.pattern(/^\d+$/)]],
    password: ['', [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)
    ]],
    RepeatPassword: ['', [Validators.required, Validators.minLength(6)]]
  }, {
    validators: RegisterComponent.passwordsMatchValidator
  });

  constructor(private apiService: ApiServiceService, private fb: FormBuilder,private router:Router) {}

  static passwordsMatchValidator(group: FormGroup): { [key: string]: boolean } | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('RepeatPassword')?.value;
    return password === confirmPassword ? null : { passwordsMismatch: true };
  }

  onSubmit(): void {
    this.formSubmitted = true;

    if (this.registrationForm.invalid) {
      return;
    }

    const payload = {
      email: this.registrationForm.value.email,
      username: this.registrationForm.value.username,
      surname: this.registrationForm.value.surname, 
      address: this.registrationForm.value.Address,
      dateOfBirth: this.registrationForm.value.DateOfBirth,
      IDNumber: this.registrationForm.value.IDNumber,
      gender: this.registrationForm.value.Gender,
      nextOfKinName: this.registrationForm.value.NextOfKinName,
      nextOfKinNumber: this.registrationForm.value.NextOfKinPhoneNumber,  
      password: this.registrationForm.value.password,
     repeatPassword: this.registrationForm.value.RepeatPassword,
      myNumber: this.registrationForm.value.PhoneNumber
    };
 
    this.apiService.postRegistrationData(payload).subscribe({
      next: (response) => {
        this.errors = {};
        this.adderrors = {};
        
        this.successMessage = 'Registration successful! Please log in.';
        this.registrationForm.reset();
        this.formSubmitted = false;
         Swal.fire('Success!', 'You Have Successfully Registered! Please Login', 'success');
      
       this.router.navigate(['/loginn']);

      },
      error: (err) => {
        this.errors = {};
        this.adderrors = {};
     this.errors = err.Message;
 
   this.errorMessage=err.error;
 
      
      }
    });
  }
}