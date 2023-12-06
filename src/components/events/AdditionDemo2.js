import React, { useState } from "react";

export default function AdditionDemo2() {
  let [num1, setNum1] = useState(0);
  let [num2, setNum2] = useState(0);
  let [result, setResult] = useState("");

  // const changeHandler1 = (event) => {
  //   let value = +event.target.value;
  //   setNum1(value);
  // };
  /* const changeHandler = (event) => {
    let value = +event.target.value;
    let name = event.target.name;

    if (name === "num1") {
      setNum1(value);
    } else {
      setNum2(value);
    }
  }; */
  const addition = () => {
    setResult(`Addition of ${num1} & ${num2} is ${num1 + num2}`);
  };

  return (
    <>
      <h1>Addition Demo -2</h1>

      <input type="number" name="num1" onChange={(e)=>{setNum1(+e.target.value)}} />
      <input type="number" name="num2" onChange={(e)=>{setNum2(+e.target.value)}} />

      <button onClick={addition}>Add</button>

      <div>{result}</div>
    </>
  );
}
