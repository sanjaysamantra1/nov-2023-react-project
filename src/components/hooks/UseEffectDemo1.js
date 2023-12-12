import React, { useEffect } from "react";
import { useState } from "react";

export default function UseEffectDemo1() {
  const [a, setA] = useState(10);
  const [b, setB] = useState(20);
  const [c, setC] = useState(30);

  useEffect(() => {
    console.log("UseEffect Called");
  });

  return (
    <>
      <h1>UseEffectDemo1 Component</h1>
      <h2>
        a-{a} b-{b} c-{c}
      </h2>
      <button onClick={()=>{setA(15)}}>set-a</button>
      <button onClick={()=>{setB(25)}} className="m-1">set-b</button>
      <button onClick={()=>{setC(35)}}>set-c</button>
    </>
  );
}
