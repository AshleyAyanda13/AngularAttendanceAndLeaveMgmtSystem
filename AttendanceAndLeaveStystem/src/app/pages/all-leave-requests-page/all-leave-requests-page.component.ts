import { Component } from '@angular/core';
import { AllLeaveRequestsViewComponent } from '../../components/supervisordashboard/all-leave-requests-view/all-leave-requests-view.component';

@Component({
  selector: 'app-all-leave-requests-page',
  standalone: true,
  imports: [AllLeaveRequestsViewComponent],
  templateUrl: './all-leave-requests-page.component.html',
  styleUrl: './all-leave-requests-page.component.css'
})
export class AllLeaveRequestsPageComponent {

}
