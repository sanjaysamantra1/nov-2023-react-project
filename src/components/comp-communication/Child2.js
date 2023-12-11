import React from "react";

export default function Child2({name}) {
  return (
    <div className="border border-danger p-2">
      <div>This is Child-2 Component</div>
      <div>Name from Parent is-{name} </div>
    </div>
  );
}
