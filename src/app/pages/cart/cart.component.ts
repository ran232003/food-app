import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: any;
  totalCart: any;
  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.cartService.cartChange.subscribe((cart) => {
      this.cart = cart;
      console.log(cart);
    });
    this.totalCart = this.cartService.checkOut;
    this.cartService.checkOutChange.subscribe((checkout) => {
      this.totalCart = checkout;
    });
    console.log(this.cart);
  }
}
