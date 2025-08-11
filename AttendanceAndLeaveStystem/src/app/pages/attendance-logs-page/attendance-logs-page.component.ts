import { Component } from '@angular/core';
import { AttendanceLogsComponent } from '../../components/attendance-logs/attendance-logs.component';

@Component({
  selector: 'app-attendance-logs-page',
  standalone: true,
  imports: [AttendanceLogsComponent],
  templateUrl: './attendance-logs-page.component.html',
  styleUrl: './attendance-logs-page.component.css'
})
export class AttendanceLogsPageComponent {

}
