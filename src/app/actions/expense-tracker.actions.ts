import { createAction, props } from '@ngrx/store';
import { ExpenseData } from '../interfaces/expense.interface';

export const addExpense = createAction(
    '[Expense] Add Expense', 
    props<{expenseData: ExpenseData}>()
);