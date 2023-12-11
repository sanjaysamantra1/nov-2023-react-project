import React from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import { useState } from "react";

export default function Parent() {
  const [a, setA] = useState(10);
  const [name, setName] = useState("Sachin");

  const f1 = function () {
    console.log("I am f1 from Parent Comp");
  };
  const updateName = function (newName) {
    setName(newName);
  };

  return (
    <>
      <div className="border border-success p-2">
        <div className="row">
          <div>This is Parent Component</div>
          <div>A value from my own component is- {a}</div>
          <div>Name value from my own component is- {name}</div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <Child1 a={a} f1Child={f1} updateName={updateName} />
          </div>
          <div className="col-sm-6">
            <Child2 name={name} />
          </div>
        </div>
      </div>
    </>
  );
}
