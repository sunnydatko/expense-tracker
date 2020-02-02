import { Component, OnInit } from '@angular/core';
import { ExpenseData } from "../interfaces/expense.interface";

const EXPENSE_DATA: ExpenseData[] = [];

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss']
})
export class ExpenseListComponent implements OnInit {
  dataSource = EXPENSE_DATA;
  displayedColumns: string[] = ["cost", "description", "quantity", "total"];

  constructor() { }

  ngOnInit() {
  }

}
