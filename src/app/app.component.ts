import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

import { ExpenseTrackerDialogComponent } from "./expense-tracker-dialog/expense-tracker-dialog.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "expense-tracker";

  constructor(public dialog: MatDialog) {}

  openExpenseTrackerDialog(): void {
    this.dialog.open(ExpenseTrackerDialogComponent, {
      width: "675px"
    });
  }
}
