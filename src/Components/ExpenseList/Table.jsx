import React, { useMemo } from "react";
import { useTable } from "react-table";
import { groupedColumns } from "./columns";
import { useSelector } from "react-redux";
import { format } from "date-fns";

export function Table() {
  const { expenseList } = useSelector((state) => state.expenses);

  const columnsMemoized = useMemo(() => groupedColumns, []);
  const dataMemoized = useMemo(() => {
    const filteredExpenseList = expenseList
      .sort((a, b) => {
        const c = new Date(a.createdAt);
        const d = new Date(b.createdAt);
        return d - c;
      })
      .map((data) => {
        return {
          ...data,
          category: data.category.title,
          createdAt: format(new Date(data.createdAt), "dd/MM/yyyy"),
          id: data.category.id,
        };
      });

    return filteredExpenseList;
  }, []);

  const tableInstance = useTable({
    columns: columnsMemoized,
    data: dataMemoized,
  });

  const {
    getTableBodyProps,
    getTableProps,
    rows,
    headerGroups,
    prepareRow,
    footerGroups,
  } = tableInstance;

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
      <tfoot>
        {footerGroups.map((footerGroup) => {
          return (
            <tr {...footerGroup.getHeaderGroupProps()}>
              {footerGroup.headers.map((column) => {
                return (
                  <td
                    style={{
                      border: "1px solid gray",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                    {...column.getFooterProps()}
                  >
                    {column.render("Footer")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tfoot>
    </table>
  );
}
