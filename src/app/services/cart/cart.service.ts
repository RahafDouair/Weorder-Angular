import { Injectable } from '@angular/core';
import { BehaviorSubject, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: any[] = [];
  private cartItemsSubject = new BehaviorSubject<any[]>(this.getCartItems());
  cartItems$ = this.cartItemsSubject.asObservable();


  constructor() { }
  addToCart(product: any) {
    let cartItems = this.cartItemsSubject.getValue();
    const existingProductIndex = cartItems.findIndex((item: { id: any; }) => item.id === product.id);
    if (existingProductIndex !== -1) {
      cartItems[existingProductIndex].quantity += 1;
    } else {
      cartItems.push({ ...product, quantity: 1 });
    }
    this.cartItemsSubject.next(cartItems);
  }

  getCartItems(): any[] {
    if (this.cartItemsSubject) {
        return this.cartItemsSubject.getValue();
    } else {
        return [];
    }
}
  getCartLength(): number {
    let cartItems = this.cartItemsSubject.getValue();
    return cartItems.length;
  }

  clearCart() {
    this.cartItemsSubject.next([]);
  }
  removeItemById(productId: any) {
    let cartItems = this.cartItemsSubject.getValue();
    const productIndex = cartItems.findIndex((item: { id: any; }) => item.id === productId);
    if (productIndex !== -1) {
      cartItems.splice(productIndex, 1);
      this.cartItemsSubject.next(cartItems);
    }
  }


}
