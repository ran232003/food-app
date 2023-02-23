import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
})
export class TagsComponent implements OnInit {
  tags!: {};
  constructor(private foodService: FoodService) {}
  ngOnInit(): void {
    this.tags = this.foodService.currentTags;
  }
  handleFilter(item: any) {
    console.log(item);
    this.foodService.filterTags(item.key);
  }
}
