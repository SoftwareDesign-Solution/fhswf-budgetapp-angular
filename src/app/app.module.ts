import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddBudgetModalComponent } from './components/add-budget-modal/add-budget-modal.component';
import { ViewExpensesModalComponent } from './components/view-expenses-modal/view-expenses-modal.component';
import { ExpenseItemComponent } from './components/expense-item/expense-item.component';
import { TotalBudgetCardComponent } from './components/total-budget-card/total-budget-card.component';
import { BudgetCardComponent } from './components/budget-card/budget-card.component';
import { AddExpenseModalComponent } from './components/add-expense-modal/add-expense-modal.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    AddBudgetModalComponent,
    ViewExpensesModalComponent,
    ExpenseItemComponent,
    TotalBudgetCardComponent,
    BudgetCardComponent,
    AddExpenseModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
