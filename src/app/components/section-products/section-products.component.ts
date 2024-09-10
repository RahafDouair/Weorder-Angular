import { Component, Input, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-section-products',
  templateUrl: './section-products.component.html',
  styleUrl: './section-products.component.css'
})
export class SectionProductsComponent implements OnInit{
  @Input() product: any;
  productsData:any;
  isLoading: boolean = true;

  constructor(private apiService: MainService) { }
  ngOnInit(): void {

    this.apiService.getProductPopular().subscribe((data: any) => {
      setTimeout(() => {

      this.productsData = data;
      this.isLoading = false;
    }, 2000);
    });
  }
}
