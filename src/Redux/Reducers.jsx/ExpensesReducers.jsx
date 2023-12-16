import {
  ADD_EXPENSE,
  CHANGE_LIST_VIEW,
  CLEAR_CATEGORY,
  DELETE_EXPENSE,
  GET_CATEGORY,
  SEARCH_EXPENSE,
} from "../ActionTypes/ExpensesTypes";

const list = localStorage.getItem("expense-list");

let expenseStoredList = JSON.parse(list);

const initialState = {
  expenseList: expenseStoredList !== null ? expenseStoredList : [],
  filters: {
    category: "",
    higherThan: 0,
    lowerThan: 0,
    byName: "",
  },
  listView: {
    gridView: true,
    tableView: false,
  },
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

      localStorage.setItem(
        "expense-list",
        JSON.stringify(filteredExpenses ? filteredExpenses : "")
      );

      return {
        ...state,
        expenseList: filteredExpenses,
      };

    case SEARCH_EXPENSE:
      return {
        ...state,
        filters: { ...state.filters, byName: action.payload },
      };

    case GET_CATEGORY:
      return {
        ...state,
        filters: { ...state.filters, category: action.payload },
      };

    case CLEAR_CATEGORY:
      return {
        ...state,
        filters: { ...state.filters, category: "" },
      };

    case CHANGE_LIST_VIEW:
      return {
        ...state,
        listView: action.payload,
      };

    default:
      return state;
  }
}
