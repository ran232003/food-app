import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { sample_foods } from './shared/data';
import { Food } from './shared/Food';
@Injectable({ providedIn: 'root' })
export class FoodService {
  foods: Food[] = sample_foods;
  currentTags = this.setTags();
  foodChange = new Subject<Food[]>();
  FilterResult = new Subject<Food[]>();
  constructor() {}
  getFood() {
    return this.foodChange;
  }
  setFilterResult(filteredOptions: Food[]) {
    this.foodChange.next(filteredOptions);
  }
  setTags() {
    let tags: any = { All: this.foods.length };
    this.foods.map((food) => {
      food.tags?.map((tag, index) => {
        if (tags[tag as keyof typeof tags]) {
          tags[tag as keyof typeof tags] = tags[tag as keyof typeof tags] + 1;
        } else {
          tags[tag as keyof typeof tags] = 1;
        }
      });
    });
    console.log(tags);
    return tags;
  }
  filterTags(tagInput: any) {
    if (tagInput === 'All') {
      this.foodChange.next(this.foods);
    } else {
      let temp = this.foods.filter((food) => {
        let flag = false;
        food.tags?.map((tag) => {
          if (tag === tagInput) {
            flag = true;
          }
        });
        if (flag) {
          return food;
        }
        return;
      });
      console.log(temp);
      this.foodChange.next(temp);
    }
  }
  getFoodById(id: any) {
    return this.foods.find((item) => item.id === id) as Food;
  }
}
