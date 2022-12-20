import {
  ADD_EXPENSE,
  DELETE_EXPENSE,
  SEARCH_EXPENSE,
} from "../ActionTypes/ExpensesTypes";

const list = localStorage.getItem("expense-list");

let expenseStoredList = JSON.parse(list);

const initialState = {
  expenseList: expenseStoredList !== null ? expenseStoredList : [],
};

export function ExpensesReducers(state = initialState, action) {
  switch (action.type) {
    case ADD_EXPENSE:
      localStorage.setItem(
        "expense-list",
        JSON.stringify([...state.expenseList, action.payload])
      );
      return {
        ...state,
        expenseList: [...state.expenseList, action.payload],
      };

    case DELETE_EXPENSE:
      const filteredExpenses = state.expenseList.filter((data) => {
        return data.category.id !== action.payload;
      });

      localStorage.setItem("expense-list", JSON.stringify(filteredExpenses));

      return {
        ...state,
        expenseList: filteredExpenses,
      };

    case SEARCH_EXPENSE:
      {
        const filteredExpenses = state.expenseList.filter((data) => {
          return data.category.id !== action.payload;
        });

        localStorage.setItem(
          "expense-list",
          JSON.stringify([filteredExpenses])
        );
      }

      return {
        ...state,
        expenseList: filteredExpenses,
      };

    default:
      return state;
  }
}
