import { Component,OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-arrivals-section',
  templateUrl: './arrivals-section.component.html',
  styleUrl: './arrivals-section.component.css'
})

export class ArrivalsSectionComponent  implements OnInit{

  productsArrival: any;
product: any;
isLoading: boolean = true;

  constructor(private apiService: MainService ,private cartService: CartService) { }
  
  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
  ngOnInit(): void {

    this.apiService.getProductArrival().subscribe((data: any) => {
      setTimeout(() => {
      this.productsArrival = data.data;
      this.isLoading = false;
      }, 2000);
    });

  }
}

