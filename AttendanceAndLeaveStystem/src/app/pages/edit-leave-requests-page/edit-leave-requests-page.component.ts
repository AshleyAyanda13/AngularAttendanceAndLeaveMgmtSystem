import { Component } from '@angular/core';
import { EditLeaveRequestsComponent } from '../../components/leave-requests/edit-leave-requests/edit-leave-requests.component';

@Component({
  selector: 'app-edit-leave-requests-page',
  standalone: true,
  imports: [EditLeaveRequestsComponent],
  templateUrl: './edit-leave-requests-page.component.html',
  styleUrl: './edit-leave-requests-page.component.css'
})
export class EditLeaveRequestsPageComponent {

}
