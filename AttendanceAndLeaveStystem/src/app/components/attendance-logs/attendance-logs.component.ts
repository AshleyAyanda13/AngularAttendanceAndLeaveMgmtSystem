import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiServiceService } from '../../services/api-service.service';

@Component({
  selector: 'app-attendance-logs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './attendance-logs.component.html',
  styleUrl: './attendance-logs.component.css'
})
export class AttendanceLogsComponent implements OnInit {

  AllmyLogs: any ;
constructor(private apiService:ApiServiceService) {}
  ngOnInit(): void {
    







this.apiService.getAllMyLogs().subscribe({
      next: (response) => {
     
        if(response==null)
        {
          response="Inventory is empty";


        }else
        {
        this.AllmyLogs=response;
        }
      }
      , error: (err:any) => {
        console.log('Error response:', err); // Log the error response
      }
    });






  }




}
