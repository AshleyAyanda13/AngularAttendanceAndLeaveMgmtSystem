import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { BodyContentComponent } from "./components/body-content/body-content.component";
import { FooterComponent } from './components/footer/footer.component';
import { ApiServiceService } from './services/api-service.service';
import { AuthStateService } from './services/auth-state.service';
 


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
role:any;
  constructor(private apiService: ApiServiceService, private AuthState:AuthStateService) {}
  ngOnInit(): void {
          
this.apiService.getLoggedInUserRole().subscribe({
      next: (response) => {
        
 this.role= response.role.replace("ROLE_", "");

        this.AuthState.setRole(this.role);
    
       
      },
      error: (err) => {
         
      }
    });


  }
  title = 'Angular Attendance and Leave Booking System';

}
