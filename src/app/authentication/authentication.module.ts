import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFrameComponent } from './auth-frame/auth-frame.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationRoutingModule } from './authentication-routing.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthServicesService } from './services/auth-services.service';

@NgModule({
  declarations: [AuthFrameComponent, SignupComponent, LoginComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [AuthServicesService],
})
export class AuthenticationModule {}
