import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from '../../../services/api-service.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule, AbstractControl, ValidatorFn } from '@angular/forms';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-leave-requests',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule,CommonModule],
  templateUrl: './edit-leave-requests.component.html',
  styleUrl: './edit-leave-requests.component.css'
})
export class EditLeaveRequestsComponent implements OnInit {
  formSubmitted: boolean=false;
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

  EditLeaveForm!: FormGroup;
  leaveId!: number;

  constructor(
    private apiService: ApiServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam && !isNaN(Number(idParam))) {
      this.leaveId = Number(idParam);
      console.log('Leave ID:', this.leaveId);
      this.initForm();
      this.loadLeaveRequest();
    } else {
      console.error('Invalid or missing ID in route');
    }
  }

  initForm() {
    this.EditLeaveForm = this.fb.group({
      Date: ['', Validators.required],
      Date2: ['', Validators.required],
      Reason: ['', [Validators.required, Validators.minLength(6)]]
    },{ validators: this.validateDateRange });
  }

  loadLeaveRequest() {
    this.apiService.GetLeavebyId(this.leaveId).subscribe(data => {
      console.log('Leave Request Data:', data);
      this.EditLeaveForm.patchValue({
        Date: data.startDate,
        Date2: data.endDate,
        Reason: data.reason
      });
    });
  }

  EditLeaveRequest() {
     this.formSubmitted = true;
    const payload = {
      id: this.leaveId,
      startDate: this.EditLeaveForm.value.Date,
      endDate: this.EditLeaveForm.value.Date2,
      reason: this.EditLeaveForm.value.Reason
    };

    console.log('Payload:', payload);

    this.apiService.EditLeaveRequest(payload).subscribe({
      next: (response) => {
        Swal.fire('Success!', 'Successfully Edited Record', 'success');
        this.router.navigate(['/LeaveRequestPage']);
      },
      error: (err) => {
        if (err.error) {
          Swal.fire('Error!', err.error + '!', 'error');
          console.log('Error response:', err.error);
        }
      }
    });
  }
}
