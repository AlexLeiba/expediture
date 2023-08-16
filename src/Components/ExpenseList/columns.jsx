/////REACT TABLE COLUMNS
//each column is represented as object/ Header defines the label of each column

import { format } from "date-fns";
import { ColumnFilter } from "./Filters";

//ACCESSOR: represents the bond between data of each column from(expenseslist) and object Columns data
export const Columns = [
  {
    Header: "Price",
    Footer: "Price",
    accessor: "amount",
    Filter: ColumnFilter,
    disabledFilters: true,
  },
  {
    Header: "Category",
    Footer: "Category",
    accessor: "category",
  },
  {
    Header: "CreatedAt",
    Footer: "CreatedAt",
    accessor: "createdAt",
  },
  {
    Header: "Title",
    Footer: "Title",
    accessor: "title",
  },
];

export const groupedColumns = [
  {
    Header: "Categories",
    Footer: "Categories",
    columns: [
      {
        Header: "id",
        accessor: "id",
        Footer: "id",
        Filter: ColumnFilter,
        disableFilters: true,
      }, //group of headers
      {
        Header: "Category name",
        accessor: "category",
        Footer: "Category",
        Filter: ColumnFilter,
      },
    ],
  },
  {
    Header: "Expense Title",
    Footer: "Expense Title",
    accessor: "title",
    Filter: ColumnFilter,
  },

  {
    Header: "Price",
    Footer: "Price",
    accessor: "amount",
    Filter: ColumnFilter,
  },
  {
    Header: "Created date",
    Footer: "Created date",
    accessor: "createdAt",
    Cell: ({ value }) => format(new Date(value), "dd/MM/yyyy"), //the keyword Cell, have access to all Cell values from this particular 'accessor' to format time value only when it is displayed on screen, before that we have to keep it as a ISO string in order to sort corectly
    Filter: ColumnFilter,
  },
];
