import React from "react";

export default function EventDemo4() {
  return (
    <div onClick={()=>{console.log("Div Clicked..")}}>
      This is a div
      <p onClick={()=>{console.log("Para Clicked..")}}>
        This is a para
        <span onClick={()=>{console.log("Span Clicked..")}}>
          This is a span
          <button onClick={(e)=>{console.log("Button Clicked..");e.stopPropagation()}}>Click</button>
        </span>
      </p>
    </div>
  );
}
