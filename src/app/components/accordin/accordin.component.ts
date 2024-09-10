import { Component } from '@angular/core';

@Component({
  selector: 'app-accordin',
  templateUrl: './accordin.component.html',
  styleUrl: './accordin.component.css'
})
export class AccordinComponent {
  accordionItems: any[] = Array.from({ length: 3 }, (_, i) => i + 1);
  activeIndex: number = -1;

  toggleAccordion(index: number) {
    this.activeIndex = this.activeIndex === index ? -1 : index;
  }
}
