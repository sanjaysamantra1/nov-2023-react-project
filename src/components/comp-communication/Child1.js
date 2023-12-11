import React from "react";

export default function Child1({ a, f1Child,updateName }) {
  return (
    <div className="border border-primary p-2">
      <div>This is Child-1 Component</div>
      <div>A value from my Parent component is- {a}</div>
      <button onClick={f1Child} className="m-1">call f1</button>
      <button onClick={()=>{updateName('Rahul')}}>Update Name</button>
    </div>
  );
}
