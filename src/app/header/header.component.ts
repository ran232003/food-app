import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../shared/User';
import { UserApiService } from '../userApi.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  user!: User;
  constructor(
    private userApiService: UserApiService,
    private routerNavigate: Router
  ) {}
  ngOnInit(): void {
    this.user = this.userApiService.user;

    this.userApiService.userUpdate.subscribe((user) => {
      this.user = user;
    });
  }
  logOut() {
    console.log('logout');
    this.userApiService.logoutUser();
    this.routerNavigate.navigate(['/auth/login']);
  }
}
