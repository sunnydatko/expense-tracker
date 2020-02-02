import { Component, OnInit, OnChanges } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";

import { ExpenseData } from "../interfaces/expense.interface";

const EXPENSE_DATA: ExpenseData[] = [];

@Component({
  selector: "app-expense-list",
  templateUrl: "./expense-list.component.html",
  styleUrls: ["./expense-list.component.scss"]
})
export class ExpenseListComponent implements OnInit {
  expenseList$: Observable<ExpenseData[]>;
  dataSource = EXPENSE_DATA;
  displayedColumns: string[] = ["cost", "description", "quantity", "total"];

  constructor(private store: Store<{ expenseList: ExpenseData[] }>) {
    this.expenseList$ = store.pipe(select("expenseList"));
  }

  ngOnInit() {}

  ngOnChanges() {
    console.log(this.expenseList$);
  }
}
