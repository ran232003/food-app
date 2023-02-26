import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/food.service';
import { Food } from 'src/app/shared/Food';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css'],
})
export class FoodListComponent implements OnInit {
  foods: Food[] = [];
  condition = true;
  constructor(private foodService: FoodService) {}
  ngOnInit(): void {
    console.log('here');
    this.foods = this.foodService.foods;
    this.foodService.foodChange.subscribe((foods) => {
      this.foods = foods;

      if (this.foods.length > 0) {
        this.condition = false;
      }
      console.log('here2', this.condition);
    });
    if (this.foods.length > 0) {
      this.condition = false;
    }
    console.log('here', this.condition);
  }
}
