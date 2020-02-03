import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";

import { ExpenseData } from "../interfaces/expense.interface";

@Component({
  selector: "app-expense-list",
  templateUrl: "./expense-list.component.html",
  styleUrls: ["./expense-list.component.scss"]
})
export class ExpenseListComponent implements OnInit {
  expenses$: Observable<ExpenseData[]>;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ["cost", "quantity", "description", "total"];

  constructor(private store: Store<{ expenses: ExpenseData[] }>) {
    this.expenses$ = store.pipe(select("expenses"));
  }

  ngOnInit(): void {
    this.expenses$.subscribe(data => {
      this.dataSource.data = data['expenses'];
    });
  }
}
