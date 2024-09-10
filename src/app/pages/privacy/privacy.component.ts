import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.css'
})
export class PrivacyComponent implements OnInit {
  privacyData: any;
  isLoading: boolean = true;

  constructor(private apiService: MainService) { }
  ngOnInit(): void {
    this.apiService.getPrivacy().subscribe((data: any) => {
      setTimeout(() => {
        this.privacyData = data;
        // Assuming data structure matches your expected format
        this.isLoading = false; // Set isLoading to false once data is loaded
      }, 2000); // Simulating a 2-second delay
    });

  }
}
