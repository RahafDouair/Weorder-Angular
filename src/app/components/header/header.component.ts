import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  cartItemCount: number;
  isDropdownOpen = false;
  cartItems: any[] = [];
  cartLength: number = 0;
  isNavbarCollapsed = true;
  // @ViewChild('dropdown') dropdown!: ElementRef;

  // toggleDropdown() {
  //   this.isDropdownOpen = !this.isDropdownOpen;
  // }

  // Close dropdown when clicking outside
  // @HostListener('document:click', ['$event'])
  // closeDropdown(event: Event) {
  //   if (!this.dropdown.nativeElement.contains(event.target)) {
  //     this.isDropdownOpen = false;
  //   }
  // }
  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
  constructor(private cartService: CartService){
    this.cartItemCount = this.cartService.getCartItems().length;


  }


  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
      this.cartLength = this.cartService.getCartLength();
    });


  }
  

}
