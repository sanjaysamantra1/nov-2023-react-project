import React, { useState } from "react";
import addition from "../../utils/MathUtils";

export default function ClickCounter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h2>In Click Counter Component - count is {count}</h2>
      <button onClick={increment}>Click me To Increment</button>
      <button onClick={addition} className="m-1">
        Add
      </button>
    </>
  );
}
