import { ADD_EXPENSE, DELETE_EXPENSE } from "../ActionTypes/ExpensesTypes";

export function AddExpense(payload) {
  return {
    type: ADD_EXPENSE,
    payload,
  };
}

export function DeleteExpense(payload) {
  return {
    type: DELETE_EXPENSE,
    payload,
  };
}
