import {
  ADD_EXPENSE,
  DELETE_EXPENSE,
  SEARCH_EXPENSE,
} from "../ActionTypes/ExpensesTypes";

export function AddExpense(payload) {
  console.log("payload", payload);
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

export function SearchExpense(payload) {
  console.log(payload);
  return {
    type: SEARCH_EXPENSE,
    payload,
  };
}
