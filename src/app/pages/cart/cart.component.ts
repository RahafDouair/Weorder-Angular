import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  cartItems: any[] = [];


  constructor(private cartService: CartService) {}

  ngOnInit() {
    // this.cartItems = this.cartService.getItems();
    this.cartItems = this.cartService.getCartItems();

  }
 
  deleteItem(productId: any) {
    this.cartService.removeItemById(productId);
    this.cartItems = this.cartService.getCartItems(); // Update the local cartItems array
  }
 

}
