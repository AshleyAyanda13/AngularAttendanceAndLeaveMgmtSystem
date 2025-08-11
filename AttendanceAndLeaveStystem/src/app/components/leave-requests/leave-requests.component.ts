import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-leave-requests',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leave-requests.component.html',
  styleUrl: './leave-requests.component.css'
})
export class LeaveRequestsComponent implements OnInit {
Delete(id: number) {
  this.router.navigate(['/DeleteMyLeaveRequests', id]);
}
 
editLeaveRequest(id: number) {
  this.router.navigate(['/EditMyLeaveRequests', id]);
}


  
AddLeaveRequest() {
this.router.navigate(['/AddLeaveRequestPage']); 
}
LeaveRequestsHolder: any;

  // Define the form controls and their initial values
  constructor(private apiService: ApiServiceService, private router:Router) {}
  ngOnInit(): void {
    
    

   this.apiService.getAllLeaveRequests().subscribe({
      next: (response) => {
        
    this.LeaveRequestsHolder= response;
    
      },
      error: (err) => {
        if (err.error) {
          
          console.log('Error response:', err.error);
        }
      }
    });




  }


  
}
