import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
  standalone: true,
  imports: [ ReactiveFormsModule ,FormsModule ,RouterModule],

})

export class SigninComponent {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder,private authService: AuthService) {
    this.loginForm = this.fb.group({
      phone: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(4)])
    });
  }
  login(): void {
    if (this.loginForm.valid) {
      const { phone, password } = this.loginForm.value;
      this.authService.login(phone, password).subscribe(
        (response) => {
          // Handle API response here
          console.log(response);
          console.log('test');
        },
        (error) => {
          // Handle error
          console.error(error);
                    console.log('errror');

        }
      );
    }
  }
  // login(){
  //   if (this.loginForm.valid) {
  //     const phone = this.loginForm.get('phone')?.value; // Optional chaining used here
  //     const password = this.loginForm.get('password')?.value;
  //     if (phone && password) {
  //       // Implement your login logic here
  //       console.log('Phone:', phone);
  //       console.log('Password:', password);
  //     }
  //   }
  // }

}
