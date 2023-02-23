import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FoodService } from 'src/app/food.service';
import { Food } from 'src/app/shared/Food';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  foods: Food[] = [];
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<any[]>;
  constructor(private foodService: FoodService) {}
  ngOnInit(): void {
    this.foods = this.foodService.foods;
    // this.foodService.foodChange.subscribe((foods) => {
    //   this.foods = foods;
    // });
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => {
        return this._filter(value || '');
      })
    );
    this.foodService.setTags();
  }
  private _filter(value: string) {
    const filterValue = value.toLowerCase();

    let result = this.foods.filter((option) => {
      return option.name.toLowerCase().includes(filterValue);
    });
    this.foodService.setFilterResult(result);
    return result;
  }
}
