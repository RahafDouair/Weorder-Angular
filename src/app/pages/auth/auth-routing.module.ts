import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
// import { AuthGuard } from '../../services/grauds/grauds.service';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: 'login',
        component: LoginComponent,
        // canActivate: [AuthGuard],
      },
      {
        path: 'register',
        component: RegisterComponent,
        // canActivate: [AuthGuard],
      },
    

     
    ]
    
  }

  
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
