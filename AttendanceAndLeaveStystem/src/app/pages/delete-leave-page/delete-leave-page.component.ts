import { Component } from '@angular/core';
import { DeleteLeaveComponent } from '../../components/leave-requests/delete-leave/delete-leave.component';

@Component({
  selector: 'app-delete-leave-page',
  standalone: true,
  imports: [DeleteLeaveComponent],
  templateUrl: './delete-leave-page.component.html',
  styleUrl: './delete-leave-page.component.css'
})
export class DeleteLeavePageComponent {

}
