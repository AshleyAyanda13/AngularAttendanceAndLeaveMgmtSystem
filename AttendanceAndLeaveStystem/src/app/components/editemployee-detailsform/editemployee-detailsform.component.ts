import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { Validators, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editemployee-detailsform',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './editemployee-detailsform.component.html',
  styleUrl: './editemployee-detailsform.component.css'
})
export class EditemployeeDetailsformComponent implements OnInit {
onCancel() {
       this.router.navigate(['/employeedetailspage']);
}

  registrationForm!: FormGroup;
  EmployeeDetails: any;
formSubmitted: boolean = false;
errors: any = {};
adderrors: { [key: string]: { description: string } } = {};
  constructor(private apiService: ApiServiceService, private fb: FormBuilder,private router: Router) {}

  ngOnInit(): void {
    // Initialize the form
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', [Validators.required, Validators.minLength(3)]],
      surname: ['', [Validators.required, Validators.minLength(2)]],
      dateOfBirth: ['', [Validators.required]],
      IDNumber: ['', [Validators.required, Validators.minLength(3)]],
      gender: ['', [Validators.required, Validators.minLength(3)]],
      nextOfKinName: ['', [Validators.required, Validators.minLength(3)]],
      nextOfKinNumber: ['', [Validators.required, Validators.minLength(3)]]
    });

     
    this.apiService.getMyEmployeeDetails().subscribe({
      next: (response) => {
        if (response.dateOfBirth) {
      const isoDate = new Date(response.dateOfBirth);
      response.dateOfBirth = isoDate.toISOString().split('T')[0]; // "2025-08-13"
    }
        this.EmployeeDetails = response;
        this.registrationForm.patchValue(response);
      
      },
      error: (err) => {
        console.error('Failed to fetch employee details', err);
      }
    });
  }
  onSubmit() {
 this.formSubmitted = true;
  if (this.registrationForm.invalid) {
    return; // Stop if form is invalid
  }

  const payload = this.registrationForm.value
  console.log('Form submitted with payload:', payload);


this.apiService.postEditedEmployeeDetails(payload).subscribe({
      next: (response) => {
         Swal.fire('Success!', 'Successfully edited Your Information!', 'success');
      this.registrationForm.reset();
       this.router.navigate(['/employeedetailspage']); // Navigate to the home page on successful login
      },
      error: (err) => {
        

        console.error('Registration error:', err);
        if (err.error && err.error.errors) {
         
        }
        
      }
    });


}
}
