import React, { useEffect, useRef } from "react";

function CheckboxRows({ indeterminate, ...rest }, ref) {
  const defaultRef = useRef();
  const resolvedRef = ref || defaultRef;

  useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);
  return (
    <>
      <input type="checkbox" ref={resolvedRef} {...rest} />
    </>
  );
}

export default React.forwardRef(CheckboxRows);
