import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../../services/api-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-leave',
  standalone: true,
  imports: [],
  templateUrl: './delete-leave.component.html',
  styleUrl: './delete-leave.component.css'
})
export class DeleteLeaveComponent implements OnInit {
onCancel() {
       this.router.navigate(['/LeaveRequestPage']);
}
ToBeDeletedData: any;

  leaveId: number = 0; 
  constructor(private apiService: ApiServiceService,  private router: Router,private route: ActivatedRoute,) {}
  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam && !isNaN(Number(idParam))) {
      this.leaveId = Number(idParam);
      console.log('Leave ID:', this.leaveId);
    
      this.loadLeaveRequest();
    } else {
      console.error('Invalid or missing ID in route');
    }
  }

   loadLeaveRequest() {
   
    this.apiService.GetLeavebyId(this.leaveId).subscribe(data => {
      console.log('Leave Request Data:', data);
       
      this.ToBeDeletedData = data;
    });








  }



  DeleteLeaveRecord() {

    const payload = {
      id: this.leaveId,
    
    };

    this.apiService.DeleteLeaveRequest(payload).subscribe({
      next: (response) => {
         Swal.fire('Success!', 'Successfully Deleted Record!', 'success');
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
