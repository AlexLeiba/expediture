import {
  ADD_EXPENSE,
  DELETE_EXPENSE,
  SEARCH_EXPENSE,
} from "../ActionTypes/ExpensesTypes";

function initialStorageList() {
  const list = localStorage.getItem("expense-list");

  let expenseList = [];

  if (list) {
    expenseList = JSON.parse(list);
  }

  return expenseList;
}

const initialState = {
  expenseList: [],
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

      localStorage.setItem("expense-list", JSON.stringify([filteredExpenses]));

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
