import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { Router, RouterLink } from '@angular/router';
import { AuthStateService } from '../../services/auth-state.service';

@Component({
  selector: 'app-employeedetails',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './employeedetails.component.html',
  styleUrl: './employeedetails.component.css'
})
export class EmployeedetailsComponent implements OnInit {

  EmployeeDetails: any;
  constructor(private apiService: ApiServiceService, private router: Router,private authState: AuthStateService) {

  }
  ngOnInit(): void {
    
  
    this.apiService.getMyEmployeeDetails().subscribe({
      next: (response) => {


        this.EmployeeDetails = response;
      
      },
      error: (err) => {
      
      }
    });





  }

  OnLogout() {

localStorage.removeItem('jwtToken'); 
    this.router.navigate(['/loginn']); 
     this.authState.clearRole();
    this.apiService.Logout().subscribe({
      next: (response) => {
        
        
         

      },
      error: (err) => {
        console.error('Logout failed:', err);
      }
    });

  }







}
