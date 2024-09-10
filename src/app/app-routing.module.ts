import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { AboutComponent } from './pages/about/about.component';
import { DetailProductComponent } from './pages/detail-product/detail-product.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { SigninComponent } from './pages/auth/signin/signin.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { CartComponent } from './pages/cart/cart.component';


const routes: Routes = [
  {
    path: '',
     component:HomeComponent
  },
  {
    path: 'privacy',
     component:PrivacyComponent
  },
  {
    path: 'about',
     component:AboutComponent
  },
  {
    path: 'products/:id',
  component:DetailProductComponent
  },
  {
    path: 'categories',
  component:CategoriesComponent
  },
  {
    path: 'cart',
  component:CartComponent
  },
  {
    path: 'register',
  component:RegisterComponent
  },
  {
    path: 'login',
  component:SigninComponent
  },

  {
    path: '**',
      component:DetailProductComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
