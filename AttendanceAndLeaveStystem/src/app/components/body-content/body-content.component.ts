import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import necessary modules
 
import { RouterOutlet } from '@angular/router';
 

@Component({
  selector: 'app-body-content',
  standalone: true, // Mark as a standalone component
  templateUrl: './body-content.component.html',
  styleUrls: ['./body-content.component.css'],
  imports: [CommonModule,RouterOutlet] // Import required modules directly
})
export class BodyContentComponent implements OnInit {
 


 

  ngOnInit(): void {


  }
}