import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service'; 
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supervisordashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './supervisordashboard.component.html',
  styleUrl: './supervisordashboard.component.css'
})
export class SupervisordashboardComponent implements OnInit {
goToTodaysLogs() {
 this.router.navigate(['/CurrentDayPage']);
}

Inventoryitems:any;

constructor(private apiservice: ApiServiceService,private router:Router) {}

ngOnInit() {

 
    this.apiservice.getallemployeesClockStatus().subscribe({
      next: (response) => {
 console.log('Response:', response);
         this.Inventoryitems=response;
      },
      error: (err) => {
      
      }
    });
  

  
  }
}
