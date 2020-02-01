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
      cost: ["", Validators.required],
      quantity: ["", Validators.required],
      description: ["", Validators.required]
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
