import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    AuthLayoutComponent,
    SigninComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
