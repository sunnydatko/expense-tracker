import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule
} from "@angular/material";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { AppComponent } from "./app.component";
import { ExpenseListComponent } from "./expense-list/expense-list.component";
import { ExpenseTrackerDialogComponent } from "./expense-tracker-dialog/expense-tracker-dialog.component";
import { expenseReducers } from "./reducers/index.reducers";

@NgModule({
  declarations: [
    AppComponent,
    ExpenseTrackerDialogComponent,
    ExpenseListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ expenses: expenseReducers}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: true }),

    // angular material
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
  ],
  entryComponents: [ExpenseTrackerDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
