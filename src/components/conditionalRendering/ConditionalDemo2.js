import React from "react";

export default function ConditionalDemo2() {
  let x = 7;
  let commonPart = (
    <>
      <div>This is Div-1</div>
      <div>This is Div-2</div>
      <div>This is Div-3</div>
      <div>This is Div-4</div>
    </>
  );

  if (x % 2 === 0) {
    return (
      <>
        {commonPart}
        <h1>{x} is Even Number</h1>;
      </>
    );
  } else {
    return (
      <>
        {commonPart}
        <h1>{x} is Odd Number</h1>;
      </>
    );
  }
}
