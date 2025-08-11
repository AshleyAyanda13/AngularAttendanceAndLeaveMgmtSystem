import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from '../../../services/api-service.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';     

@Component({
  selector: 'app-respond-to-leave',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule,CommonModule],
  templateUrl: './respond-to-leave.component.html',
  styleUrl: './respond-to-leave.component.css'
})
export class RespondToLeaveComponent implements OnInit {
leaveId: number =0;
DataHolder:any;
  RespondtoLeaveForm!: FormGroup;
  formSubmitted: boolean = false;
  constructor(private router:Router,private route:ActivatedRoute, private apiservice:ApiServiceService, private fb: FormBuilder) { }
   
ngOnInit(): void {
    this.RespondtoLeaveForm = this.fb.group({
            status: ['', Validators.required],
            Reason: ['', [ Validators.minLength(0)]]
         
          });

   const idParam = this.route.snapshot.paramMap.get('id');
       if (idParam && !isNaN(Number(idParam))) {
      this.leaveId = Number(idParam);
      this.loadLeaveRequest();
    
            
    } else {
      console.error('Invalid or missing ID in route');
    }


}

EditLeaveForm: any;
EditSupervisorLeaveRequest() {
  this.formSubmitted = true;
 
  if (this.RespondtoLeaveForm.invalid) {
    return; // Stop if form is invalid
  }
  const payload = {
      id: this.leaveId,
       status: this.RespondtoLeaveForm.value.status,
        responsereason: this.RespondtoLeaveForm.value.Reason
    };
 
this.apiservice.SupervisorUpdateLeaveStatus(payload).subscribe({
      next: (response) => {
        
        
        Swal.fire({
          title: 'Success',
          text: 'Leave request updated successfully',})
           this.router.navigate(['/SupervisorViewAllLeaves']);
          
      }
      

      ,error: (err) => {
        console.error('Error:', err);
      }
    });
  }


loadLeaveRequest() {
    this.apiservice.GetLeavebyId(this.leaveId).subscribe(data => {
    
       this.DataHolder = data;
       
    });
  }
onCancel() {
this.router.navigate(['/SupervisorViewAllLeaves']);
}

}
