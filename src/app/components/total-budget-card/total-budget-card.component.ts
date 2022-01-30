import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-total-budget-card',
  templateUrl: './total-budget-card.component.html',
  styleUrls: ['./total-budget-card.component.scss']
})
export class TotalBudgetCardComponent implements OnInit {

  @Input() name!: string;

  @Input() amount!: number;

  @Input() max!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
