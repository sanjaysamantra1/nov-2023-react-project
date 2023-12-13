import React, { useState } from "react";
import { useEffect } from "react";

export default function UseEffectDemo3() {
  const [a, setA] = useState(10);

  useEffect(() => {
    console.log("Mounted/Updated");

    return () => {
      console.log("Unmount");
    };
  });

  return (
    <>
      <h1>UseEffectDemo1 Component</h1>
      <h2>a-{a}</h2>
      <button
        onClick={() => {
          setA(a + 1);
        }}
      >
        increment-a
      </button>
    </>
  );
}
