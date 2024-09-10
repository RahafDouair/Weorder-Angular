import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DealsComponent } from './components/deals/deals.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { AboutComponent } from './pages/about/about.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CardProductComponent } from './components/card-product/card-product.component';
import { SectionProductsComponent } from './components/section-products/section-products.component';
import { ArrivalsSectionComponent } from './components/arrivals-section/arrivals-section.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { SmartComponent } from './components/smart/smart.component';
import { SingleProductComponent } from './pages/single-product/single-product.component';
import { DetailProductComponent } from './pages/detail-product/detail-product.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoriesComponent } from './pages/categories/categories.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { FeatureProductsComponent } from './components/feature-products/feature-products.component';
import { AccordinComponent } from './components/accordin/accordin.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { HeaderCustomComponent } from './components/header-custom/header-custom.component';
import { CartComponent } from './pages/cart/cart.component';
import { CartItemComponent } from './pages/cart/cart-item/cart-item.component'; // Import FormsModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { provideToastr, ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DealsComponent,
    PrivacyComponent,
    AboutComponent,
    CardProductComponent,
    SectionProductsComponent,
    ArrivalsSectionComponent,
    SmartComponent,
    SingleProductComponent,
    DetailProductComponent,
    CategoriesComponent,
    NotfoundComponent,
    FeatureProductsComponent,
    AccordinComponent,
    LoginComponent,
    HeaderCustomComponent,
    CartComponent,
    CartItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CarouselModule.forRoot(),
    NgxSkeletonLoaderModule.forRoot({ animation: 'pulse', loadingText: 'This item is actually loading...' }),
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule

  ],

  providers: [HttpClient ,
    provideToastr(
      {
       
      }
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
