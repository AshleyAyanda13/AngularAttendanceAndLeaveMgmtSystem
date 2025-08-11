import { Component } from '@angular/core';
import { CurrentDayAttendanceComponent } from '../../components/supervisordashboard/current-day-attendance/current-day-attendance.component';

@Component({
  selector: 'app-current-day-attendance-page',
  standalone: true,
  imports: [CurrentDayAttendanceComponent],
  templateUrl: './current-day-attendance-page.component.html',
  styleUrl: './current-day-attendance-page.component.css'
})
export class CurrentDayAttendancePageComponent {

}
