import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from '../cart.module';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  @Input()
  cartItem!: CartItem;
  @Output() cartItemDeleted = new EventEmitter<{
    productId: number
  }>();
  @Output() cartItemChanged = new EventEmitter<{
    productId: number
  }>();

  onCartItemDeleted(event:any) {
    const id = event.target.getAttribute('id');
    this.cartItemDeleted.emit({
        productId: id
      });
  }

  onCartItemChanged(event:any) {
    const id = event.target.getAttribute('id');
    this.cartItemChanged.emit({
        productId: id
      });
  }
}
