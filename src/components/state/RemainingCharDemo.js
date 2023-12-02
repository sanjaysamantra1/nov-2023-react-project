import React, { useState } from "react";

export default function RemainingCharDemo() {
  const maxChars = 100;
  let [remaining, setRemaining] = useState(maxChars);

  let changeHandler = (event)=>{
    let msg = event.target.value;
    setRemaining(maxChars - msg.length);
  }

  return (
    <div className="text-center">
      <textarea onKeyUp={changeHandler} maxLength={maxChars} rows={5} cols={30}></textarea>
      <p>Remaining char {remaining}</p>
    </div>
  );
}
