import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2'; // <-- Add this import
import { AuthStateService } from '../../services/auth-state.service';
@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [CommonModule, FormsModule,SweetAlert2Module],
  providers: [ApiServiceService,CommonModule]
})
export class HomeComponent implements OnInit, OnDestroy {
  timer: string = '';
  intervalId: any;
  pollingId: any;
 isInitialized = false;
  isClockedIn = false;
  clockInTime: string | null = null;
  clockOutTime: string | null = null;
  earlyLeaveReason: string = '';
  isProcessing: boolean = false;
  ErrorHolder: String='';

  constructor(private authState: AuthStateService,private apiservice: ApiServiceService) {}

  ngOnInit() {

  
    this.startTimer();
    this.checkClockStatus();
if(this.authState.getRole() === 'EMPLOYEE')
   {
    this.pollingId = setInterval(() => this.checkClockStatus(), 500);
}
  }

  startTimer() {
    this.timer = new Date().toLocaleTimeString();
    this.intervalId = setInterval(() => {
      this.timer = new Date().toLocaleTimeString();
    }, 1000);
  }

  clockIn() {
    const payload = { clockInReason:this.earlyLeaveReason };
    this.isProcessing = true;

    this.apiservice.clockIn(payload).subscribe({
      next: () => {
        
           Swal.fire('Success!', 'Successfully clocked in!', 'success'); 
          this.earlyLeaveReason = ''; 
      
      
        this.isClockedIn = true;
        this.clockInTime = new Date().toISOString();
        this.isProcessing = false;
        
      },
      error: (err) => {

        if (err.status === 500||err.status === 400) {
         this.ErrorHolder=err.error;
      
              Swal.fire('Error!', err.error+'!', 'error'); 
        }
        else
          {
          this.ErrorHolder='';
          }
        
        this.isProcessing = false;
      }
    });
  }

  clockOut() {
    const payload = { clockOutReason: this.earlyLeaveReason };
    this.isProcessing = true;

    this.apiservice.clockOut(payload).subscribe({
      next: (response) => {
       
           this.earlyLeaveReason = ''; 
            Swal.fire('Success!', 'Successfully clocked out!', 'success');
             console.log('Clocked out:', response); 
        this.isClockedIn = false;
        this.clockOutTime = new Date().toISOString();
        this.timer = '';
        this.isProcessing = false;
      },
      error: (err) => {
        console.error('Clock-out error:', err.error);
      if (err.status === 400||err.status === 500) {

        this.ErrorHolder=err.error;
     Swal.fire('Error!', err.error, 'error'); // 
        console.error('Clock-out error:', err.status);
      }else {

        this.ErrorHolder='';
      }
        this.isProcessing = false;
      }
    });
  }

  toggleClock() {
    if (this.isClockedIn) {

      
      this.clockOut();
    } else 
    {
 
      this.clockIn();
    }
  }

  checkClockStatus() {
    this.apiservice.getClockStatus().subscribe({
      next: (response) => {
        this.isClockedIn = response.clockedIn;
            this.isInitialized = true;
      },
      error: (err) => {
      
      }
    });
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
    clearInterval(this.pollingId);
  }
}
