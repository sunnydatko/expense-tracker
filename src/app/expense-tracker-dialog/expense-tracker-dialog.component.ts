import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-expense-tracker-dialog',
  templateUrl: './expense-tracker-dialog.component.html',
  styleUrls: ['./expense-tracker-dialog.component.scss']
})
export class ExpenseTrackerDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ExpenseTrackerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: null) {}

  ngOnInit() {
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
