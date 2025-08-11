import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../../services/api-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-current-day-attendance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './current-day-attendance.component.html',
  styleUrl: './current-day-attendance.component.css'
})
export class CurrentDayAttendanceComponent implements OnInit {



  constructor(private apiservice: ApiServiceService) {}
  ngOnInit(): void {
    


 this.apiservice.getTodaysLogs().subscribe({
      next: (response) => {
 console.log('Response:', response);
         this.Inventoryitems=response;
      },
      error: (err) => {
      
      }
    });



    
  }
  Inventoryitems: any;
 
   
   










}
