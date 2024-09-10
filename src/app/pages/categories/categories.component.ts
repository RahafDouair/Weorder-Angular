import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})

export class CategoriesComponent implements OnInit{
  isSubMenuOpen: boolean = false;

  constructor(private apiService: MainService) { }


  categories:any;
  subcategories:any;
  isOpen1: boolean = false;
  accordionItems: any[] = Array.from({ length: 3 }, (_, i) => i + 1);
  activeIndex: number = -1;
  max_price:number | undefined;
  min_price:number | undefined;


  toggleAccordion(index: number) {
    this.activeIndex = this.activeIndex === index ? -1 : index;
  }

  toggleSubMenu() {
    this.isSubMenuOpen = !this.isSubMenuOpen;
  }
  showSubcategories: boolean = false;

  // toggleSubcategories(event: Event): void {
  //   event.preventDefault(); // Prevents the default behavior of the anchor tag
  //   this.showSubcategories = !this.showSubcategories;
  // }
  selectedCategory!: string | null;
  toggleSubcategories(event: Event, category: string): void {
    event.preventDefault(); // Prevents the default behavior of the anchor tag
    this.selectedCategory = category === this.selectedCategory ? null : category;
  }
  ngOnInit(): void {
    this.apiService.getSearchItem().subscribe((data: any) => {
      this.categories = data.all_category;
      this.max_price=data.max_price;
      this.min_price=data.min_price;

    });


    }
  }

  // isExpensesExpanded = false;

  // toggleExpansion() {
  //   this.isExpensesExpanded = !this.isExpensesExpanded;
  // }

