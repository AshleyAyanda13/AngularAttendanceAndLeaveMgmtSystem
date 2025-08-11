import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ApiServiceService } from '../../../services/api-service.service';
import { Router } from '@angular/router';

import {  FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-leave-requests',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule,CommonModule],
  templateUrl: './add-leave-requests.component.html',
  styleUrl: './add-leave-requests.component.css'
})
export class AddLeaveRequestsComponent {
formSubmitted:boolean= false;
onCancel() {
       this.router.navigate(['/LeaveRequestPage']);
}
validateDateRange: ValidatorFn = (control: AbstractControl): { [key: string]: any } | null => {
  const group = control as FormGroup;
  const start = group.get('Date')?.value;
  const end = group.get('Date2')?.value;

  if (start && end && new Date(start) > new Date(end)) {
    return { dateRangeInvalid: true };
  }

  return null;
};


   AddLeaveForm = new FormGroup({
  Date: new FormControl(null, Validators.required),
  Date2: new FormControl(null, Validators.required),
  Reason: new FormControl('', [Validators.required, Validators.minLength(6)])
}, { validators: this.validateDateRange.bind(this) });

    error: string = "";
    response: any;
  wow:any

  constructor(private apiService: ApiServiceService, private router: Router) {}
  AddLeave() {
    this.formSubmitted = true;
    const payload = {
     
      startDate: this.AddLeaveForm.value.Date,
      endDate: this.AddLeaveForm.value.Date2,
      reason: this.AddLeaveForm.value.Reason
    };

    
    this.apiService.postInventoryData(payload).subscribe({
      next: (response) => {
         Swal.fire('Success!', 'Successfully added Leave', 'success');
       this.router.navigate(['/LeaveRequestPage']); 
        console.log('Responsel:', response.Message);
      },
      error: (err) => {
        if (err.error) {
           Swal.fire('Error!', err.error+'!', 'error'); 
          console.log('Error response:', err.error);
        }
      }
    });

  }
}
