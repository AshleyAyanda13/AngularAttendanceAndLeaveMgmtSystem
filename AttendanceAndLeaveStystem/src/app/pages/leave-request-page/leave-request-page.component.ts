import { Component } from '@angular/core';
import { LeaveRequestsComponent } from '../../components/leave-requests/leave-requests.component';

@Component({
  selector: 'app-leave-request-page',
  standalone: true,
  imports: [LeaveRequestsComponent],
  templateUrl: './leave-request-page.component.html',
  styleUrl: './leave-request-page.component.css'
})
export class LeaveRequestPageComponent {

}
