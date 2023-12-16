import React from "react";
import { useRef } from "react";

export default function RefDemo2() {
  const myRef1 = useRef();
  const myRef2 = useRef();

  const addition = () => {
    console.log(myRef1);
    const num1 = +myRef1.current.value;
    const num2 = +myRef2.current.value;
    console.log(num1 + num2);
  };

  return (
    <>
      <div className="border-primary">
        First Number:
        <input type="number" ref={myRef1} /> <br />
        <br />
        Second Number:
        <input type="number" ref={myRef2} /> <br />
        <br />
        <button onClick={addition}>Add</button>
      </div>
    </>
  );
}
