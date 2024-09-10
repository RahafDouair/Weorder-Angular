import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'comart-landing';
  isLogin=false;
  constructor(private router: Router) {}
  ngOnInit() {
   
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo(0, 0); // Scroll to the top of the page
      this.isLogin = this.router.url.includes('/login') || this.router.url.includes('/register');

    });
  }
}
