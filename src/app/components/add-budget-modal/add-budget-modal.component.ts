import { Component, Input, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Budget} from "../../models/Budget";
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-budget-modal',
  templateUrl: './add-budget-modal.component.html',
  styleUrls: ['./add-budget-modal.component.scss']
})
export class AddBudgetModalComponent implements OnInit {

  name: string = '';
  amount: number = 0;

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
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

    const budget: Budget = {
      id: uuidv4(),
      name: this.name,
      amount: 0,
      max: this.amount,
      expenses: []
    };

    this.activeModal.close(budget);

  }

}
