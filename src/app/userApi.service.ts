import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FoodService } from './food.service';
import { Food } from './shared/Food';
import { User } from './shared/User';
import { Subject } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class UserApiService {
  user!: User;
  userUpdate = new Subject<User>();
  constructor(private http: HttpClient, private foodService: FoodService) {}
  signUp(user: any, status: string) {
    if (status === 'login') {
    }
    return this.http.post<User>(
      `http://localhost:5000/api/auth/${status}`,
      user
    );
  }
  setUserLocalStorage(user: User) {
    console.log(user);
    localStorage.setItem('user', JSON.stringify(user));
    this.user = user;
    this.userUpdate.next(this.user);
  }
  getUserLocalStorage() {
    let user = localStorage.getItem('user');
    if (user) {
      user = JSON.parse(user);
      this.user = new User(user);
      this.userUpdate.next(this.user);
    }
    this.userUpdate.next(this.user);
    return user;
  }
}
