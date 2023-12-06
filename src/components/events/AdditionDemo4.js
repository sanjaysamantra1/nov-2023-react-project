import React, { useState } from "react";

export default function AdditionDemo4() {
  let [obj, setObj] = useState({ num1: 0, num2: 0, result: "" });

  const changeHandler = (event) => {
    let newObj = { ...obj, [event.target.name]: event.target.value };
    setObj(newObj);
  };
  const addition = () => {
    setObj({
      ...obj,
      result: `Addition of ${obj.num1} & ${obj.num2} is ${+obj.num1 + +obj.num2}`,
    });
  };

  return (
    <>
      <h1>Addition Demo -2</h1>

      <input type="number" name="num1" onChange={changeHandler} />
      <input type="number" name="num2" onChange={changeHandler} />

      <button onClick={addition}>Add</button>

      <div>{obj.result}</div>
    </>
  );
}
