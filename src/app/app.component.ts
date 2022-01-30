import { Component } from '@angular/core';

import {NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {AddBudgetModalComponent} from "./components/add-budget-modal/add-budget-modal.component";
import {AddExpenseModalComponent} from "./components/add-expense-modal/add-expense-modal.component";
import {Budget} from "./models/Budget";
import { v4 as uuidv4 } from 'uuid';
import {Expense} from "./models/Expense";
import {ViewExpensesModalComponent} from "./components/view-expenses-modal/view-expenses-modal.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FHSWF Angular Kostenplaner';

  budgets: Budget[] = [{id: uuidv4(), name: 'Hello World 1!', amount: 0, max: 150, expenses: []}, {id: uuidv4(), name: 'Hello World 2!', amount: 0, max: 250, expenses: []}]

  constructor(private modalService: NgbModal) {}

  onBudgetClick(): void {

    const modalRef = this.modalService.open(AddBudgetModalComponent);

    modalRef.result.then((result) => {

      this.budgets.push(result as Budget);

    });

  }

  onExpenseAdd(budget?: Budget): void {

    const modalRef = this.modalService.open(AddExpenseModalComponent);

    modalRef.componentInstance.budget = budget;
    modalRef.componentInstance.budgets = this.budgets;

    modalRef.result.then((result) => {

      const expense: Expense = result as Expense;

      let index = this.budgets.findIndex(item => item.id === expense.budgetId);

      this.budgets[index].expenses.push(expense);

      let total: number = this.budgets[index].expenses.reduce((total, current) => (total + (+current.amount)), 0);

      this.budgets[index].amount = total;

    });

  }

  onViewExpenses(budget?: Budget): void {

    const modalRef = this.modalService.open(ViewExpensesModalComponent);

    modalRef.componentInstance.budget = budget;

    modalRef.result.then((result) => {

      const expense: Expense = result as Expense;

      if (expense == undefined)
        return;

      let index = this.budgets.findIndex(item => item.id === expense.budgetId);

      const expenses = this.budgets[index].expenses.filter(item => item.id !== expense.id);

      this.budgets[index].expenses = expenses;

      let total: number = this.budgets[index].expenses.reduce((total, current) => (total + (+current.amount)), 0);

      this.budgets[index].amount = total;

    });

  }

  get TotalBudgetAmount(): number {
    return this.budgets.reduce((total, item) => (total + (+item.amount)), 0);
  }

  get TotalBudgetMax(): number {
    return this.budgets.reduce((total, item) => (total + (+item.max)), 0);
  }

}
