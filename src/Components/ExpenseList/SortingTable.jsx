import React, { useMemo } from "react";
import { useTable, useSortBy, useGlobalFilter, useFilters } from "react-table";
import { groupedColumns } from "./columns";
import { useSelector } from "react-redux";
import { GlobalFilter } from "./Filters";

export function SortingTable() {
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
          //   createdAt: format(new Date(data.createdAt), "dd/MM/yyyy"),
          id: data.category.id,
        };
      });

    return filteredExpenseList;
  }, []);

  console.log({ expenseList });

  const tableInstance = useTable(
    {
      columns: columnsMemoized,
      data: dataMemoized,
    },
    useFilters, //for column filterr
    useGlobalFilter, //for global filters
    useSortBy //for sorting
  );

  const {
    getTableBodyProps,
    getTableProps,
    rows,
    headerGroups,
    prepareRow,
    footerGroups,
    state,
    setGlobalFilter, //will set the search value of global filter of all cells
  } = tableInstance;

  const { globalFilter } = state; //global filter state

  //getTableProps its a fn that needs to be destructured on table tag

  //getTableBodyProps its a fn that needs to be destructured on table body

  //headerGroups its an array which requires to map header for each header group

  return (
    <>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
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
              <tr
                style={{
                  border: "1px solid gray",
                }}
                {...headerG.getHeaderGroupProps()}
              >
                {headerG.headers.map((column) => {
                  return (
                    <th
                      style={{
                        border: "1px solid gray",
                      }}
                      {...column.getHeaderProps(column.getSortByToggleProps())} //here we have to add some arguments for sorting
                    >
                      <div>
                        {column.canFilter ? column.render("Filter") : null}
                      </div>
                      {column.render("Header")}

                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? " ↑ "
                            : " ↓ "
                          : ""}
                      </span>
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
    </>
  );
}
