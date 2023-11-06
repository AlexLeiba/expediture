import React, { useMemo } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useFilters,
  usePagination,
  useRowSelect,
} from "react-table";
import { groupedColumns } from "./columns";
import { useDispatch, useSelector } from "react-redux";
import { ColumnFilter, GlobalFilter } from "./Filters";
import CheckboxRows from "./CheckboxRows";
import { IconRemove } from "../Card/Card.style";
import { DeleteExpense } from "../../Redux/Actions.jsx/ExpensesActions";

import { toast } from "react-toastify";
import { ExpenseTableContainer } from "./ExpenseList.style";

export function ExpensesTable() {
  const dispatch = useDispatch();
  const { expenseList } = useSelector((state) => state.expenses);

  const defaultColumn = useMemo(() => {
    return {
      Filter: ColumnFilter,
    };
  }, []);

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
          id: data.category.id,
        };
      });

    return filteredExpenseList;
  }, [expenseList]);

  const tableInstance = useTable(
    {
      columns: columnsMemoized,
      data: dataMemoized,
      defaultColumn,
      initialState: {
        pageIndex: 0,
      },
    },

    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
          {
            id: "selection",
            Header: ({ getToggleAllRowsSelectedProps }) => {
              return <CheckboxRows {...getToggleAllRowsSelectedProps()} />;
            },
            Cell: ({ row }) => {
              return <CheckboxRows {...row.getToggleRowSelectedProps()} />;
            },
          },
          ...columns,
        ];
      });
    }
  );

  const {
    getTableBodyProps,
    getTableProps,

    page,
    headerGroups,
    prepareRow,
    footerGroups,
    state,
    setGlobalFilter,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    // pageCount, //return an index of the current page
    setPageSize,
    selectedFlatRows,
  } = tableInstance;
  const { globalFilter, pageIndex, pageSize } = state;

  const calculatedValue = useMemo(() => {
    const result = selectedFlatRows.reduce((acc, data, index) => {
      const total = acc + Number(data.original.cost);

      return total;
    }, 0);

    return result;
  }, [selectedFlatRows]);

  function handleRemove() {
    selectedFlatRows.forEach((data) => {
      if (data.original.id) {
        dispatch(DeleteExpense(data.original.id));
      }
    });

    toast("Expense removed successfully!", {
      type: "success",
    });
  }

  return (
    <ExpenseTableContainer>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <strong>
            Page: {pageIndex + 1} of {pageOptions.length} |{" "}
          </strong>
          <strong>Go to page:</strong>
          <input
            style={{ width: "40px", marginLeft: "5px", marginRight: "10px" }}
            type="number"
            placeholder={pageIndex + 1}
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value ? Number(e.target.value) : 0;
              gotoPage(pageNumber - 1);
            }}
          />
          <select
            style={{ marginRight: "10px" }}
            name="pageSize"
            id="pageSize"
            value={pageSize}
            onChange={(e) => setPageSize(e.target.value)}
          >
            {[10, 25, 50].map((pageSize) => {
              return (
                <option key={pageSize} value={pageSize}>
                  Show rows: {pageSize}
                </option>
              );
            })}
          </select>
          <button disabled={!canPreviousPage} onClick={() => gotoPage(0)}>
            {"<<"}
          </button>
          <button
            disabled={canPreviousPage ? false : true}
            onClick={() => previousPage()}
          >
            Prev page
          </button>{" "}
          <button
            disabled={canNextPage ? false : true}
            onClick={() => nextPage()}
          >
            Next page
          </button>
          <button
            disabled={!canNextPage}
            onClick={() => gotoPage(pageOptions.length - 1)}
          >
            {">>"}
          </button>
        </div>
        {selectedFlatRows.length > 0 && (
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <span>Remove</span>
            <IconRemove
              title="Remove"
              onClick={() => handleRemove()}
              src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png"
              alt="remove"
              style={{ height: "18px", width: "auto" }}
            />
          </div>
        )}
      </div>

      <table
        style={{
          border: "1px solid gray",
        }}
        {...getTableProps()}
      >
        <thead style={{ border: "1px solid gray" }}>
          {headerGroups.map((headerG, index) => {
            return (
              <tr
                key={index}
                style={{
                  border: "1px solid gray",
                }}
                {...headerG.getHeaderGroupProps()}
              >
                {headerG.headers.map((column, index) => {
                  return (
                    <th
                      key={index}
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
          {page.map((row, index) => {
            prepareRow(row);

            return (
              <tr
                key={index}
                style={{ border: "1px solid gray" }}
                {...row.getRowProps()}
              >
                {
                  //access to individual row cell
                  row.cells.map((cell, index) => {
                    return (
                      <td
                        key={index}
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
          {footerGroups.map((footerGroup, index) => {
            return (
              <tr key={index} {...footerGroup.getHeaderGroupProps()}>
                {footerGroup.headers.map((column, index) => {
                  return (
                    <td
                      key={index}
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

      <div>
        <strong>Total checked expenses: ${calculatedValue}</strong>
      </div>
    </ExpenseTableContainer>
  );
}
