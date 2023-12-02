import React from "react";

export default function GreetDemo2(props) {
  return (
    <div>
      <h1>This is Greet Demo-2 Component</h1>
      <h2>{props.children}</h2>
    </div>
  );
}
