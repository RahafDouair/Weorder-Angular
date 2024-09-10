import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  aboutItem: any;
  isLoading: boolean = true;

  constructor(private apiService: MainService) { }
  ngOnInit(): void {
    this.apiService.getAboutUsPage().subscribe((data: any) => {
      setTimeout(() => {
        this.aboutItem = data; // Assuming data structure matches your expected format
        this.isLoading = false; // Set isLoading to false once data is loaded
      }, 2000); // Simulating a 2-second delay
    });
     
  }
  }

