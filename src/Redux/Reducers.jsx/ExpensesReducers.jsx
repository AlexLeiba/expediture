import React from "react";

const initialState = {
  expenseList: [],
};

export function ExpensesReducers(state = initialState, action) {
  switch (action.type) {
    case "":
      break;

    default:
      return state;
      break;
  }
}
