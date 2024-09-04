import { useCallback, useEffect, useRef, useState } from "react";

export const acceptPositive = (n) => {
  return n >= 1 ? n : 1;
};

const consolefn =
  (fn, { backgroundColor, color }) =>
  (str, ...arg) =>
    fn(
      `%c${str}`,
      `background-color: ${backgroundColor}; color: ${color};`,
      arg
    );
export const log1 = consolefn(console.log, {
  backgroundColor: "red",
  color: "white",
});
export const log2 = consolefn(console.log, {
  backgroundColor: "blue",
  color: "white",
});

export  const   useStateCallback = function (initialState)  {
  const [state, setState] = useState(initialState);
  const cbRef = useRef(null); // init mutable ref container for callbacks

  const setStateCallback = useCallback((state, cb) => {
    cbRef.current = cb; // store current, passed callback in ref
    setState(state);
  }, []); // keep object reference stable, exactly like `useState`

  useEffect(() => {
    // cb.current is `null` on initial render, 
    // so we only invoke callback on state *updates*
    if (cbRef.current) {
      cbRef.current(state);
      cbRef.current = null; // reset callback after execution
    }
  }, [state]);

  return [state, setStateCallback];
}