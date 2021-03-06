import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { Store } from "@ngrx/store";

import { addExpense } from "../actions/expense-tracker.actions";
import { ExpenseData } from "../interfaces/expense.interface";

@Component({
  selector: "app-expense-tracker-dialog",
  templateUrl: "./expense-tracker-dialog.component.html",
  styleUrls: ["./expense-tracker-dialog.component.scss"]
})
export class ExpenseTrackerDialogComponent implements OnInit {
  dialogData: any;
  expenseForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ExpenseTrackerDialogComponent>,
    private store: Store<{ expenseList: ExpenseData[] }>
  ) {
    this.createForm();
  }

  ngOnInit() {}

  createForm() {
    this.expenseForm = this.fb.group({
      cost: ["", [Validators.required, Validators.min(0)]],
      description: ["", Validators.required],
      quantity: ["", [Validators.required, Validators.min(0)]]
    });
  }

  getTotal() {
    return (
      this.expenseForm.controls["cost"].value *
      this.expenseForm.controls["quantity"].value
    ).toLocaleString(undefined, { minimumFractionDigits: 2 });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    let expenseData = <ExpenseData>{
      cost: this.expenseForm.controls["cost"].value,
      description: this.expenseForm.controls["description"].value,
      quantity: this.expenseForm.controls["quantity"].value
    };

    this.store.dispatch(addExpense({ expenseData }));
    this.dialogRef.close();
  }

  onValidateNumericWithDecimal(event): boolean {
    if (event.keyCode == 46) {
      return true;
    }

    if (event.keyCode >= 48 && event.keyCode <= 57) {
      return true;
    }
    return false;
  }

  onValidateNumericNoDecimal(event): boolean {
    if (event.keyCode >= 48 && event.keyCode <= 57) {
      return true;
    }

    return false;
  }
}
