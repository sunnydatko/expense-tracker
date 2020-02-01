import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule
} from "@angular/material";

import { AppComponent } from "./app.component";
import { ExpenseTrackerDialogComponent } from "./expense-tracker-dialog/expense-tracker-dialog.component";

@NgModule({
  declarations: [AppComponent, ExpenseTrackerDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // angular material
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  entryComponents: [ExpenseTrackerDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
