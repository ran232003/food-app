import { Component, Input, OnInit } from '@angular/core';
import { Food } from 'src/app/shared/Food';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css'],
})
//{ "id": "5", "name": "Chicken Soup", "price": 11,
// "cookTime": "40-50", "favorite": false,
//"origins": [ "india", "asia" ], "stars": 3, "imageUrl": "assets/food-5.jpg", "tags": [ "SlowFood", "Soup" ] }
export class FoodItemComponent implements OnInit {
  @Input() food!: Food;
  constructor() {}
  currentRate!: number;
  selected = 0;
  hovered = 0;
  readonly = false;
  ngOnInit(): void {
    console.log(this.food);
    this.currentRate = this.food.stars;
    this.selected = this.food.stars;
    console.log(this.currentRate);
  }
}
