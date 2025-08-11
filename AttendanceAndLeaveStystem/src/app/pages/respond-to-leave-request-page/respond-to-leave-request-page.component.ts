import { Component } from '@angular/core';
import { RespondToLeaveComponent } from '../../components/supervisordashboard/respond-to-leave/respond-to-leave.component';

@Component({
  selector: 'app-respond-to-leave-request-page',
  standalone: true,
  imports: [RespondToLeaveComponent],
  templateUrl: './respond-to-leave-request-page.component.html',
  styleUrl: './respond-to-leave-request-page.component.css'
})
export class RespondToLeaveRequestPageComponent {

}
