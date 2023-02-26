import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { Food } from 'src/app/shared/Food';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css'],
})
export class CartItemsComponent implements OnInit, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  @Input() item!: any;
  count: any;
  checkout: any;
  ngOnInit(): void {
    console.log(this.item);
    this.count = this.item.count;
    this.checkout = this.cartService.checkOut;
    this.cartService.checkOutChange.subscribe((change) => {
      this.checkout = change;
      console.log(this.checkout);
    });
    console.log(this.checkout);
  }
  constructor(private cartService: CartService) {}
  changeCount(checkCount: string) {
    if (checkCount === '+') {
      this.count = this.count + 1;
    } else {
      this.count = this.count - 1;
    }
    this.cartService.changeCount(this.count, this.item, checkCount);
  }
  removeFromCart() {
    this.cartService.removeFromCart(this.item.id);
  }
}
