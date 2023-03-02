import { Component } from '@angular/core';
import { UserApiService } from 'src/app/userApi.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent {
  searchTerm: string = '';
  constructor(private userApiService: UserApiService) {}
  sendEmail(email: string) {
    console.log(email);
    let payload = { email: email };
    console.log('sendEmail');
    this.userApiService.sendEmail(payload).subscribe((res) => {
      console.log(res);
    });
  }
  search(value: string) {}
}
