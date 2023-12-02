import React, { useState,useEffect } from "react";

export default function AdditionDemo() {
  let [num1, setNum1] = useState(0);
  let [num2, setNum2] = useState(0);
  let [result, setResult] = useState(0);

  let changeHandler1 = (event) => {
    setNum1(event.target.value);
  };
  let changeHandler2 = (event) => {
    setNum2(event.target.value);
  };
  let addition = () => {
    setResult(+num1 + +num2);
  };

  useEffect(() => {
    addition();
  });

  return (
    <div className="text-center box">
      <h2>Addition Demo</h2>

      <input onChange={changeHandler1} />
      <input onChange={changeHandler2} className="m-1"/>
      {/* <button className="btn btn-primary" onClick={addition}>
        Add
      </button> */}

      <p>
        Addition of {num1} & {num2} is {result}
      </p>
    </div>
  );
}
