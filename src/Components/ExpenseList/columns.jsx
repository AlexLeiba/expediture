/////REACT TABLE COLUMNS
//each column is represented as object/ Header defines the label of each column
//ACCESSOR: represents the bond between data of each column from(expenseslist) and object Columns data
export const Columns = [
  {
    Header: "Price",
    accessor: "amount",
  },
  {
    Header: "Category",
    accessor: "category",
  },
  {
    Header: "CreatedAt",
    accessor: "createdAt",
  },
  {
    Header: "Title",
    accessor: "title",
  },
];
