import React, { useMemo } from "react";
import { useTable } from "react-table";
import { Columns } from "./columns";
import { useSelector } from "react-redux";
import { format } from "date-fns";

export function Table() {
  const { expenseList } = useSelector((state) => state.expenses);

  console.log({ expenseList });

  const columnsMemoized = useMemo(() => Columns, []);
  const dataMemoized = useMemo(() => {
    const filteredExpenseList = expenseList.map((data) => {
      return {
        ...data,
        category: data.category.title,
        createdAt: format(new Date(data.createdAt), "dd/MM/yyyy"),
      };
    });

    return filteredExpenseList;
  }, []);

  const tableInstance = useTable({
    columns: columnsMemoized,
    data: dataMemoized,
  });

  const { getTableBodyProps, getTableProps, rows, headerGroups, prepareRow } =
    tableInstance;

  //getTableProps its a fn that needs to be destructured on table tag

  //getTableBodyProps its a fn that needs to be destructured on table body

  //headerGroups its an array which requires to map header for each header group

  return (
    <table
      style={{
        width: "100%",
        height: "100%",
        border: "1px solid gray",
        borderCollapse: "collapse",
      }}
      {...getTableProps()}
    >
      <thead style={{ border: "1px solid gray" }}>
        {headerGroups.map((headerG) => {
          return (
            <tr {...headerG.getHeaderGroupProps()}>
              {headerG.headers.map((column) => {
                return (
                  <th
                    style={{ border: "1px solid gray" }}
                    {...column.getHeaderProps()}
                  >
                    {column.render("Header")}
                  </th>
                );
              })}
            </tr>
          );
        })}
      </thead>

      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);

          return (
            <tr style={{ border: "1px solid gray" }} {...row.getRowProps()}>
              {
                //access to individual row cell
                row.cells.map((cell) => {
                  console.log({ cell });
                  return (
                    <td
                      style={{ border: "1px solid gray" }}
                      {...cell.getCellProps()}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })
              }
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
