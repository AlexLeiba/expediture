import {
  ADD_EXPENSE,
  CLEAR_CATEGORY,
  DELETE_EXPENSE,
  GET_CATEGORY,
  SEARCH_EXPENSE,
} from "../ActionTypes/ExpensesTypes";

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

export function SearchExpense(payload) {
  return {
    type: SEARCH_EXPENSE,
    payload,
  };
}

export function GetCategory(payload) {
  return {
    type: GET_CATEGORY,
    payload,
  };
}

export function ClearCategory() {
  return {
    type: CLEAR_CATEGORY,
  };
}
