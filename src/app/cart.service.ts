import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Food } from './shared/Food';
@Injectable({ providedIn: 'root' })
export class CartService {
  cart: any = {};
  cartChange = new Subject<{}>();
  checkOut = { totalAmount: 0, count: 0 };
  checkOutChange = new Subject<{}>();
  getCart() {
    return this.cart;
  }

  addToCart(food: any) {
    let id = food.id;
    if (this.cart[id as keyof typeof this.cart]) {
      console.log('if');
      //add to existing key
      this.cart[id as keyof typeof this.cart].count =
        this.cart[id as keyof typeof this.cart].count + 1;
      this.cart[id as keyof typeof this.cart].totalPrice =
        this.cart[id as keyof typeof this.cart].count *
        this.cart[id as keyof typeof this.cart].price;
      this.checkOut.totalAmount =
        this.checkOut.totalAmount +
        this.cart[id as keyof typeof this.cart].price;
      this.checkOut.count = this.checkOut.count + 1;
    } else {
      //add new item
      let count = 1;
      let totalPrice = food.price;
      this.cart[id as keyof typeof this.cart] = food;
      this.cart[id as keyof typeof this.cart].count = count;
      this.cart[id as keyof typeof this.cart].totalPrice = totalPrice;
      this.checkOut.totalAmount = this.checkOut.totalAmount + totalPrice;
      this.checkOut.count = this.checkOut.count + 1;
      console.log('else');
    }
    this.checkOutChange.next(this.checkOut);
    this.cartChange.next(this.cart);
    console.log('this.cart', this.cart);
  }
  changeCount(count: any, item: any, sign: string) {
    let id = item.id;
    this.cart[id as keyof typeof this.cart].count = count;
    this.cart[id as keyof typeof this.cart].totalPrice =
      count * this.cart[id as keyof typeof this.cart].price;
    if (sign === '+') {
      this.checkOut.count = this.checkOut.count + 1;
      this.checkOut.totalAmount +=
        this.cart[id as keyof typeof this.cart].price;
    } else {
      this.checkOut.count = this.checkOut.count - 1;
      this.checkOut.totalAmount -=
        this.cart[id as keyof typeof this.cart].price;
    }
    this.cartChange.next(this.cart);
    this.checkOutChange.next(this.checkOut);
  }
  removeFromCart(id: any) {
    console.log(this.cart[id], 'in delete');
    this.checkOut.count -= this.cart[id].count;
    this.checkOut.totalAmount -= this.cart[id].totalPrice;
    delete this.cart[id];
    console.log(this.cart[id], 'in delete');
    this.cartChange.next(this.cart);
  }
}
