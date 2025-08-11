import { Component } from '@angular/core';
import { AddLeaveRequestsComponent } from '../../components/leave-requests/add-leave-requests/add-leave-requests.component';

@Component({
  selector: 'app-add-leave-request-page',
  standalone: true,
  imports: [ AddLeaveRequestsComponent],
  templateUrl: './add-leave-request-page.component.html',
  styleUrl: './add-leave-request-page.component.css'
})
export class AddLeaveRequestPageComponent {

}
