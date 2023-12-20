import React, { useState } from "react";
import UpdatedComponent from "./CounterHOC";

function ClickCounter2({count,increment}) {
  return (
    <>
      <h2>In Click Counter Component-2 - count is {count}</h2>
      <button onClick={increment}>Click me To Increment</button>
    </>
  );
}
export default UpdatedComponent(ClickCounter2);
