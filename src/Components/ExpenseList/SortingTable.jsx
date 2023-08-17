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
import { useSelector } from "react-redux";
import { ColumnFilter, GlobalFilter } from "./Filters";
import CheckboxRows from "./CheckboxRows";

export function SortingTable() {
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
          //   createdAt: format(new Date(data.createdAt), "dd/MM/yyyy"),
          id: data.category.id,
        };
      });

    return filteredExpenseList;
  }, []);

  const tableInstance = useTable(
    {
      columns: columnsMemoized,
      data: dataMemoized,
      defaultColumn,
      initialState: {
        pageIndex: 0,
      },
    },

    useFilters, //for column filterr
    useGlobalFilter, //for global filters
    useSortBy, //for sorting
    usePagination,
    useRowSelect, //will keep track of the selected rows
    (hooks) => {
      //the fn takes all table hooks as argument/
      //this will add a first column which will reprezent checkbox
      hooks.visibleColumns.push((columns) => {
        //this fn return an array of columns
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
          ...columns, //here we spread the rest of the columns
        ];
      });
    }
  );

  const {
    getTableBodyProps,
    getTableProps,
    // rows, rows can be used when we do not use pagination
    page, //using page instead of rows
    headerGroups,
    prepareRow,
    footerGroups,
    state, //returns diferent states of the form filters,pages etc
    setGlobalFilter, //will set the search value of global filter of all cells
    nextPage, //fn which goes to next page
    previousPage, //fn which goes to prev page
    canNextPage,
    canPreviousPage,
    pageOptions, //all number of pages
    gotoPage, //fn which goes to selecte index page
    // pageCount, //return an index of the current page
    setPageSize, //will set the number of rows each page has
    selectedFlatRows, //will return all selected rows an array of rows
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state; //global filter state,page index(1.2.3)

  //getTableProps its a fn that needs to be destructured on table tag

  //getTableBodyProps its a fn that needs to be destructured on table body

  //headerGroups its an array which requires to map header for each header group

  return (
    <>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <div>
        <strong>
          {" "}
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
      {
        <p>
          flatRows Selected:{" "}
          {JSON.stringify(
            {
              FlatRows: selectedFlatRows.map((row) => row.original),
            },
            null,
            2
          )}
        </p>
      }
    </>
  );
}
