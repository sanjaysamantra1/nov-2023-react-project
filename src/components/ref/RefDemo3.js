import React from "react";
import { useRef } from "react";

export default function RefDemo3() {
  let myRef1;
  let myRef2;

  const addition = () => {
    console.log(myRef1);
    const num1 = +myRef1.value;
    const num2 = +myRef2.value;
    console.log(num1 + num2);
  };

  return (
    <>
      <div className="border-primary">
        First Number:
        <input type="number" ref={(ele) => (myRef1 = ele)} /> <br />
        <br />
        Second Number:
        <input type="number" ref={(ele) => (myRef2 = ele)} /> <br />
        <br />
        <button onClick={addition}>Add</button>
      </div>
    </>
  );
}
