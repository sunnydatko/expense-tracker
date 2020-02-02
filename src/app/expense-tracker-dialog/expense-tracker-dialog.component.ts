import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

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
    @Inject(MAT_DIALOG_DATA) public data: null
  ) {
    this.createForm();
  }

  ngOnInit() {}

  createForm() {
    this.expenseForm = this.fb.group({
      cost: ["", [Validators.required, Validators.min(0)]],
      quantity: ["", [Validators.required, Validators.min(0)]],
      description: ["", Validators.required]
    });
  }

  getTotal() {
    let value = (
      this.expenseForm.controls["cost"].value *
      this.expenseForm.controls["quantity"].value
    ).toFixed(2);

    return Number(value).toLocaleString();
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onValidateNumeric(event): boolean {
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
