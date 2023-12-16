import React from "react";
import { useRef } from "react";
import { useState } from "react";

export default function FormDemo2() {
  const ref1 = useRef();
  const ref2 = useRef();

  const submitMyForm = (e) => {
    e.preventDefault();
    console.log(ref1.current.value, ref2.current.value);
  };

  return (
    <>
      <form onSubmit={submitMyForm}>
        <p>
          Name :
          <input type="text" defaultValue="Sachin" ref={ref1} />
        </p>
        <p>
          Password : <input type="password" ref={ref2} />
        </p>
        <button>Submit</button>
      </form>
    </>
  );
}
