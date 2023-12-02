import React, { Component, useState } from "react";

export default function StateDemo3() {
  let [counter, setCounter] = useState(0);

  let increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="text-center">
      <div>State Demo-3</div>
      <div>Counter Value is: {counter}</div>

      <button className="btn btn-primary m-2" onClick={increment}>
        Increment
      </button>
    </div>
  );
}
