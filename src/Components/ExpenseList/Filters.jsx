import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";

export function GlobalFilter({ filter, setFilter }) {
  const [state, setState] = useState(filter);

  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 500); //this will run after a second when i stopped writing
  return (
    <span>
      Global Search:{" "}
      <input
        type="text"
        value={state || ""}
        onChange={(e) => {
          setState(e.target.value);
          onChange(e.target.value);
        }}
      />{" "}
    </span>
  );
}

export function ColumnFilter({ column }) {
  const { filterValue, setFilter } = column;

  const [state, setState] = useState(filterValue);

  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 500);
  return (
    <span>
      <input
        placeholder="Column search"
        type="text"
        value={state || ""}
        onChange={(e) => {
          setState(e.target.value);
          onChange(e.target.value);
        }}
      />{" "}
    </span>
  );
}
