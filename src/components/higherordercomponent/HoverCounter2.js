import React from "react";
import UpdatedComponent from "./CounterHOC";

function HoverCounter2({ count, increment }) {
  return (
    <>
      <h2>In Click Counter Component-2 - count is {count}</h2>
      <button onMouseOver={increment}>Hover me To Increment</button>
    </>
  );
}
export default UpdatedComponent(HoverCounter2);
