import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserApiService } from 'src/app/userApi.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private userApiService: UserApiService,
    private routerNavigate: Router
  ) {}
  hide: boolean = false;
  loginForm!: FormGroup;
  status!: any;
  onLogin() {
    if (!this.loginForm.valid) {
      return;
    }
    //valid
    this.userApiService.signUp(this.loginForm.value, this.status).subscribe(
      (response: any) => {
        console.log(response);
        let message = response['message'];
        let config = new MatSnackBarConfig();
        config.duration = 2000;
        config.panelClass = ['green-snackbar'];
        this.openSnackBar(message, config);
        this.userApiService.setUserLocalStorage(response.user);
        this.routerNavigate.navigate(['/']);
      },
      (error) => {
        console.log('error', error, error.error.message);
        let message = error.error.message;

        let config = new MatSnackBarConfig();
        config.duration = 2000;
        config.panelClass = ['red-snackbar'];
        this.openSnackBar(message, config);
      }
    );
  }
  openSnackBar(message: string, config: MatSnackBarConfig) {
    this.snackBar.open(message, '', config);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.status = params.status;
      this.loginForm = this.fb.group({
        fullName:
          params.status === 'signup'
            ? ['', [Validators.required, Validators.minLength(2)]]
            : null,
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
      });
    });
  }
}
