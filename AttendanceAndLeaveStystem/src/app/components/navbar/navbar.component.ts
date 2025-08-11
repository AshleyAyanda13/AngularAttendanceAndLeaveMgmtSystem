import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ViewChild, ElementRef } from '@angular/core';
import { AuthStateService } from '../../services/auth-state.service';
import { CommonModule } from '@angular/common';
import { ApiServiceService } from '../../services/api-service.service';
 

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  
logout() {


localStorage.removeItem('jwtToken'); 
    this.router.navigate(['/loginn']); 
     this.authState.clearRole();

this.apiService.Logout().subscribe({
  next: () => {
   
   
    
  }
  ,
  error: (err) => {
     
  }
});

}
  role: string | null = null;
  constructor(private authState: AuthStateService, private router: Router,private apiService: ApiServiceService) {


  
  }
  ngOnInit(): void {
   this.authState.role$.subscribe(role => {
      this.role = role;
    });
  }

   
@ViewChild('navbarNav') navbarNav!: ElementRef;

  toggleNavbar() {
    if (this.navbarNav?.nativeElement.classList.contains('show')) {
      this.navbarNav.nativeElement.classList.remove('show'); // Close navbar
    } else {
      this.navbarNav.nativeElement.classList.add('show'); // Open navbar
    }
  }


}
