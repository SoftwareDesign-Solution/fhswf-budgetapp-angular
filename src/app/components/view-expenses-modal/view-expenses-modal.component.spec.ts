import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExpensesModalComponent } from './view-expenses-modal.component';

describe('ViewExpensesModalComponent', () => {
  let component: ViewExpensesModalComponent;
  let fixture: ComponentFixture<ViewExpensesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewExpensesModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewExpensesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
