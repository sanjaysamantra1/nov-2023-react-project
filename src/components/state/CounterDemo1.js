import React, { Component, useState } from "react";

export default function CounterDemo1() {
  let [counter, setCounter] = useState(0);

  let increment = () => {
    // setCounter(counter + 1);
    setCounter((prevState) => prevState + 1);
  };
  let incrementBy5 = () => {
    increment();
    increment();
    increment();
    increment();
    increment();
  };

  return (
    <div className="text-center">
      <div>Counter Demo-1</div>
      <div>Counter Value is: {counter}</div>

      <button className="btn btn-primary m-2" onClick={increment}>
        Increment
      </button>
      <button className="btn btn-primary m-2" onClick={incrementBy5}>
        Increment By 5
      </button>
    </div>
  );
}
