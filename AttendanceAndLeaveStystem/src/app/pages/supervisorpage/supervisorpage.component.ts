import { Component } from '@angular/core';
import { SupervisordashboardComponent } from '../../components/supervisordashboard/supervisordashboard.component';

@Component({
  selector: 'app-supervisorpage',
  standalone: true,
  imports: [SupervisordashboardComponent],
  templateUrl: './supervisorpage.component.html',
  styleUrl: './supervisorpage.component.css'
})
export class SupervisorpageComponent {

}
