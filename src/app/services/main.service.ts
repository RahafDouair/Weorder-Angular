import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../constant/constant';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MainService {
  API_URL: any;

  constructor(private http: HttpClient) {}
  getAboutUsPage() {
    return this.http.get<any>(`${API_URL}about-us-page`);
  }
  getPrivacy() {
    return this.http.get<any>(`${API_URL}privacy-policy-page`);
  }
  getProductArrival() {
    return this.http.get<any>(
      `${API_URL}product?order_by=desc&sort=created_At`
    );
  }
  getProductPopular() {
    return this.http.get<any>(`${API_URL}home-dynamic-sections`);
  }
  getSliderImage() {
    return this.http.get<any>(`${API_URL}mobile-slider/1`);
  }
  getSliderSmart() {
    return this.http.get<any>(`${API_URL}mobile-slider/3`);
  }
  getAllCategories() {
    return this.http.get<any>(`${API_URL}all-categories`);
  }
  getProductById(productId: string): Observable<any> {
    return this.http.get(`${API_URL}product/${productId}`);
  }
  getSearchItem() {
    return this.http.get<any>(`${API_URL}search-items`);
  }
}
