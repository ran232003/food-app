import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FoodService } from './food.service';
import { Food } from './shared/Food';
@Injectable({ providedIn: 'root' })
export class FoodApiService {
  constructor(private http: HttpClient, private foodService: FoodService) {}

  getFoods() {
    return this.http.get<Food[]>('http://localhost:5000/api/food/getFoods');
  }
}
