import { ADD_EXPENSE, DELETE_EXPENSE } from "../ActionTypes/ExpensesTypes";

const initialState = {
  expenseList: [],
};

export function ExpensesReducers(state = initialState, action) {
  switch (action.type) {
    case ADD_EXPENSE:
      return {
        ...state,
        expenseList: [...state.expenseList, action.payload],
      };

    case DELETE_EXPENSE:
      const filteredExpenses = state.expenseList.filter((data) => {
        return data.id !== action.payload;
      });

      return {
        ...state,
        expenseList: filteredExpenses,
      };

    default:
      return state;
      break;
  }
}
