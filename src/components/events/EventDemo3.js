import React from 'react'

export default function EventDemo1() {
    const printMsg = () => {
      console.log("PrintMsg function called...");
    };

    const addition = (a,b) => {
        console.log(a+b)
    }
    return (
      <>
        <h1>Event Demo-1</h1>
        <button onClick={printMsg}>Click me</button>
        {/* <button onClick={printMsg()}>Click me</button> */}
        <div>Hello {addition(4,3)}</div>
        <button onClick={()=>{addition(2,3)}}>Add</button>
      </>
    );
  }