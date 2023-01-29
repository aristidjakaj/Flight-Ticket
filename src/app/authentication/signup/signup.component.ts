import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.registerForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      confirmPassword: [
        null,
        [Validators.required, this.checkIfPasswordsAreTheSame()],
      ],
    });
  }

  getEmailErrorMessage(): string {
    if (this.registerForm.get('email')?.getError('required')) {
      return 'You must enter a value';
    }

    return this.registerForm.get('email')?.getError('email')
      ? 'Not a valid email'
      : '';
  }

  getPasswordErrorMessage(): string {
    if (this.registerForm.get('password')?.getError('required')) {
      return 'You must enter a value';
    }

    return this.registerForm.get('password')?.getError('minlength')
      ? 'Password must be at least 6 characters'
      : '';
  }

  getConfirmPasswordErrorMessage(): string {
    if (this.registerForm.get('confirmPassword')?.getError('required')) {
      return 'You must enter a value';
    }

    return this.registerForm
      .get('confirmPassword')
      ?.getError('passwordsAreNotTheSame')
      ? 'Confirm Password should be the same as Password'
      : '';
  }

  checkIfPasswordsAreTheSame(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      if (!value || !this.registerForm.get('password')?.value) {
        return null;
      }

      let confirmPasswordValid: boolean = false;

      const passwordFormValue: string =
        this.registerForm.get('password')?.value;
      console.log(this.registerForm.get('password')?.value);

      if (control.value === passwordFormValue) {
        confirmPasswordValid = true;
      }

      return confirmPasswordValid ? null : { passwordsAreNotTheSame: true };
    };
  }
}
