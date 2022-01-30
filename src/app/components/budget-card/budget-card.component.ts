import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AddExpenseModalComponent} from "../add-expense-modal/add-expense-modal.component";
import {ViewExpensesModalComponent} from "../view-expenses-modal/view-expenses-modal.component";

@Component({
  selector: 'app-budget-card',
  templateUrl: './budget-card.component.html',
  styleUrls: ['./budget-card.component.scss']
})
export class BudgetCardComponent implements OnInit {

  @Input() name!: string;

  @Input() amount!: number;

  @Input() max!: number;

  @Input() gray?: boolean;

  @Input() hideButtons?: boolean;

  @Output()
  onExpenseAdd = new EventEmitter<void>();

  @Output()
  onViewExpenses = new EventEmitter<void>();

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  /*
  onExpenseAdd(): void {
    this.modalService.open(AddExpenseModalComponent);
  }
  */

  /*
  onViewExpense(): void {
    this.modalService.open(ViewExpensesModalComponent)
  }
  */

  getProgressBarVariant(amount: number, max: number): string {
    const ratio = amount / max
    if (ratio < 0.5) return "primary"
    if (ratio < 0.75) return "warning"
    return "danger";
  }

}
