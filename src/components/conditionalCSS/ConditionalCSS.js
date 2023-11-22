import React from "react";

export default function ConditionalCSS() {
  let n = 4;

  return (
    <>
      <div className="text-center" 
            style={n % 2 === 0 ? {backgroundColor:'green'} : {backgroundColor:'red'}}>
        {n} is {n % 2 === 0 ? "Even Number" : "Odd Number"}
      </div><br/>

      <button className={`btn ${n % 2 === 0 ?'btn-success' : 'btn-danger'}`}>Button With Conditional CSS</button>
    </>
  );
}
