import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: true, showIndicators: true } }
  ]
})


export class HomeComponent  implements OnInit{


  productsArrival: any;
  productsData:any;
categories: any;
sliders:any;
isLoading: boolean = true;

  constructor(private apiService: MainService) { }
  ngOnInit(): void {
    this.apiService.getProductArrival().subscribe((data: any) => {
      this.productsArrival = data.data;
    });
    this.apiService.getSliderImage().subscribe((data: any) => {
      this.sliders = data.data;
    });
    this.apiService.getAllCategories().subscribe((data: any) => {
      setTimeout(() => {
        this.categories = data.data;
        this.isLoading = false; // Set isLoading to false once data is loaded

      }, 2000); // Simulating a 2-second delay
    });
    
   
  }
}
