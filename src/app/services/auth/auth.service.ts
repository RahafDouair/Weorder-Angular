import { Injectable } from '@angular/core';
import { API_URL } from '../../constant';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthModel } from '../../models/auth/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URL: any;

  constructor(private http: HttpClient) { }
  login(phone: number, password: string) : Observable<any> {
    return this.http.post(`${API_URL}login`, { phone, password });
  }
  register(full_name:string,phone: number, password: string) : Observable<any> {    
    return this.http.post(`${API_URL}register`, { full_name,phone, password });

  }

}
