import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-feature-products',
  templateUrl: './feature-products.component.html',
  styleUrl: './feature-products.component.css'
})
export class FeatureProductsComponent implements OnInit {
  featuresProduct:any;
  isLoading: boolean = true;

  constructor(private apiService: MainService) { }

  ngOnInit(): void {
    this.apiService.getProductArrival().subscribe((data: any) => {
      setTimeout(() => {
        this.featuresProduct=data.data;
        this.isLoading = false;

      }, 2000);
    });
  }

}
