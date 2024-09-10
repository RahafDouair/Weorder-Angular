import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordinComponent } from './accordin.component';

describe('AccordinComponent', () => {
  let component: AccordinComponent;
  let fixture: ComponentFixture<AccordinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccordinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
