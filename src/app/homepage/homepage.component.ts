import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { FoodApiService } from '../foodApi.service';
import { Food } from '../shared/Food';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  foods: Food[] = [];
  constructor(
    private foodService: FoodService,
    private foodApiService: FoodApiService
  ) {}
  ngOnInit(): void {
    //this.foodApiService.getFoods();
    this.foodApiService.getFoods().subscribe((foods: any) => {
      console.log(foods);
      this.foodService.setFoods(foods.foods);
    });
  }
  currentRate = 8;
  selected = 0;
  hovered = 0;
  readonly = false;
}
