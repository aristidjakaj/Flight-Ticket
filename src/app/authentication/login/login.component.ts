import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServicesService } from '../services/auth-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authServices: AuthServicesService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getAllUsers();
  }

  initForm(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
    });
  }

  getEmailErrorMessage(): string {
    if (this.loginForm.get('email')?.getError('required')) {
      return 'You must enter a value';
    }

    return this.loginForm.get('email')?.getError('email')
      ? 'Not a valid email'
      : '';
  }

  getPasswordErrorMessage(): string {
    if (this.loginForm.get('password')?.getError('required')) {
      return 'You must enter a value';
    }

    return this.loginForm.get('password')?.getError('minlength')
      ? 'Password must be at least 6 characters'
      : '';
  }

  getAllUsers() {
    // this.authServices.getAllUsers().subscribe((data) => {
    //   debugger;
    // });
  }
}
