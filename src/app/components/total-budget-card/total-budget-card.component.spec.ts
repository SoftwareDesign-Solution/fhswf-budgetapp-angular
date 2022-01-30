import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalBudgetCardComponent } from './total-budget-card.component';

describe('TotalBudgetCardComponent', () => {
  let component: TotalBudgetCardComponent;
  let fixture: ComponentFixture<TotalBudgetCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalBudgetCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalBudgetCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
