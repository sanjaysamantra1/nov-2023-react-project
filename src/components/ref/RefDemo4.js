import React, { useEffect, useState } from "react";
import { useRef } from "react";

export default function RefDemo4() {
  const [counter, setCounter] = useState(0);
  const myRef = useRef();

  useEffect(() => {
    myRef.val = counter;
  });
  let increment = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="text-center">
      <div>Ref Demo</div>
      <hr />
      <h2>
        Now: {counter}, before: {myRef.val}
      </h2>

      <button className="btn btn-primary" onClick={increment}>
        Increment
      </button>
    </div>
  );
}
