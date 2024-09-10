import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  standalone: true,
  imports: [ ReactiveFormsModule ,FormsModule ,RouterModule],
})
export class RegisterComponent {
  registerForm: FormGroup;
  constructor(private fb: FormBuilder,private authService: AuthService) {
    this.registerForm = this.fb.group({
      phone: new FormControl('', Validators.required),
      full_name:new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(4)])
    });
  }
onregister(): void {
    if (this.registerForm.valid) {
      const {full_name, phone, password } = this.registerForm.value;
      this.authService.register(full_name,phone, password ).subscribe(
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
}
