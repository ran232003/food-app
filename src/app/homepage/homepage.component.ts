import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  currentRate = 8;
  selected = 0;
  hovered = 0;
  readonly = false;
}
