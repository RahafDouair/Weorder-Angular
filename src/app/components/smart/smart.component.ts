import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-smart',
  templateUrl: './smart.component.html',
  styleUrl: './smart.component.css',
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: true, showIndicators: true } }
  ]
})
export class SmartComponent implements OnInit {
sliders:any;
isLoading: boolean = true;

  constructor(private apiService: MainService) { }

  ngOnInit(): void {
 this.apiService.getSliderSmart().subscribe((data: any) => {
  setTimeout(() => {

      this.sliders = data.data;
   this.isLoading=false;
    }, 2000); // Simulating a 2-second delay
  });  }





}
