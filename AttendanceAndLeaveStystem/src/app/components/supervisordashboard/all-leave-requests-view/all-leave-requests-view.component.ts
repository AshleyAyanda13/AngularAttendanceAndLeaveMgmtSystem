import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../../services/api-service.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-leave-requests-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-leave-requests-view.component.html',
  styleUrl: './all-leave-requests-view.component.css'
})
export class AllLeaveRequestsViewComponent implements OnInit {

 
editSupervisorLeaveRequest(id: number) {
  this.router.navigate(['/SupervisorRespondToLeaveRequest', id]);
  
}

LeaveRequestsHolder: any;
  constructor(private apiservice: ApiServiceService, private router:Router) {}
  

  ngOnInit(): void {
    
    
    this.apiservice.SupervisorgetAllLeave().subscribe({
      next: (response) => {
 
         this.LeaveRequestsHolder=response;
      },
      error: (err) => {
      
      }
    });



  }


  Inventoryitems: any;


   
}
