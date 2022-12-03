import { combineReducers, createStore } from "redux";
import { ExpensesReducers } from "../Reducers.jsx/ExpensesReducers";

// We are passing more reducers here in case we have more reducers
const reducer = combineReducers({
  expenses: ExpensesReducers,
});
const initialState = {};
export const store = createStore(reducer, initialState);
