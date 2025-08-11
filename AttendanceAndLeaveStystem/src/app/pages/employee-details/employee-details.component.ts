import { Component } from '@angular/core';
import { EmployeedetailsComponent } from '../../components/employeedetails/employeedetails.component';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [EmployeeDetailsComponent, EmployeedetailsComponent],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent {

}
