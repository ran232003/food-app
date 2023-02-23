import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { FoodService } from 'src/app/food.service';
import { Food } from 'src/app/shared/Food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css'],
})
export class FoodPageComponent implements OnInit {
  currentRate!: number;
  selected = 0;
  hovered = 0;
  readonly = false;
  food!: Food;
  constructor(
    private _snackBar: MatSnackBar,
    private cartService: CartService,
    private route: ActivatedRoute,
    private router: Router,
    private foodService: FoodService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      console.log(params);
      this.food = this.foodService.getFoodById(params.foodId);
      this.currentRate = this.food.stars;
      this.selected = this.food.stars;
    });
    // (+) converts string 'id' to a number
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  addToCart() {
    this.cartService.addToCart(this.food);
  }
}
