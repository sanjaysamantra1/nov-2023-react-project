import React from "react";

export default function EventDemo1() {
  const printMsg = () => {
    console.log("PrintMsg function called...");
  };
  return (
    <>
      <h1>Event Demo-1</h1>
      <button onClick={printMsg}>Click me</button>
      {/* <button onClick={printMsg()}>Click me</button> */}
    </>
  );
}
