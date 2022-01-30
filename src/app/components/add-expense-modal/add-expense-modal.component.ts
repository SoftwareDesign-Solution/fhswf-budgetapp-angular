import { Component, Input, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Budget} from "../../models/Budget";
import {Expense} from "../../models/Expense";
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-expense-modal',
  templateUrl: './add-expense-modal.component.html',
  styleUrls: ['./add-expense-modal.component.scss']
})
export class AddExpenseModalComponent implements OnInit {

  name: string = '';
  amount: number = 0;
  budgetId: string = '';

  @Input()
  budget: Budget | undefined = undefined;

  @Input()
  budgets: Budget[] | null = null;

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit(): void {

    if (this.budget != undefined)
      this.budgetId = this.budget.id;

  }

  onModalClose(): void {
    this.activeModal.close();
  }

  onCancelClick(e: any): void {
    e.preventDefault();
    this.activeModal.close();
  }

  onSaveClick(e: any): void {

    e.preventDefault();

    const expense: Expense = {
      id: uuidv4(),
      name: this.name,
      amount: this.amount,
      budgetId: this.budgetId
    };

    this.activeModal.close(expense);

  }

}
