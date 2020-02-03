import { Action, createReducer, on } from "@ngrx/store";

import { addExpense } from '../actions/expense-tracker.actions';
import { ExpenseData } from "../interfaces/expense.interface";

export interface State {
  expenses: ExpenseData[];
}

export const initialState: State = {
  expenses: []
};

const expenseReducer = createReducer(
  initialState,
  on(addExpense, (state, { expenseData }) => ({
    expenses: state.expenses.concat(expenseData)
  }))
);

export function expenseReducers(state: State | undefined, action: Action) {
  return expenseReducer(state, action);
}
