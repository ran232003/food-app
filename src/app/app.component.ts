import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodApiService } from './foodApi.service';
import { User } from './shared/User';
import { UserApiService } from './userApi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  user!: User;
  constructor(
    private userApiService: UserApiService,
    private routerNavigate: Router
  ) {}
  ngOnInit(): void {
    let storageUser = this.userApiService.getUserLocalStorage();
    if (storageUser) {
      this.routerNavigate.navigate(['/']);
    } else {
      this.routerNavigate.navigate(['/auth/login']);
    }
  }
  title = 'food-app';
}
