import React from "react";

export default function ForceUpdateDemo2() {
  let counter = 0;

  let increment = () => {
    counter = counter + 1;
    console.log(counter);
  };

  return (
    <div className="text-center">
      <div>ForceUpdateDemo2</div>
      <div>Counter Value is: {counter}</div>

      <button className="btn btn-primary" onClick={increment}>
        Increment
      </button>
    </div>
  );
}
