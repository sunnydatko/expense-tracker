import { Component } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";

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
    const dialogRef = this.dialog.open(ExpenseTrackerDialogComponent, {
      width: "550px",
      data: {  }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }
}
