import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Budget} from "../../models/Budget";
import {Expense} from "../../models/Expense";

@Component({
  selector: 'app-view-expenses-modal',
  templateUrl: './view-expenses-modal.component.html',
  styleUrls: ['./view-expenses-modal.component.scss']
})
export class ViewExpensesModalComponent implements OnInit {

  @Input()
  budget: Budget | undefined = undefined;

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  expenseDeleteClick(expense: Expense): void {
    this.activeModal.close(expense);
  }

  onModalClose(): void {
    this.activeModal.close();
  }

}
