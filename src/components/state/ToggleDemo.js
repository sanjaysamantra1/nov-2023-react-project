import React, { useState, useEffect } from "react";

export default function ToggleDemo() {
  let [flag, setFlag] = useState(true);

  let toggleFlag = () => {
    setFlag(!flag);
  };

  useEffect(() => {
    console.log(flag);
  });

  return (
    <>
      {flag ? (
        <h1>
          Please Click The Button Below to control visibility of this Paragraph
        </h1>
      ) : null}

      <button className="btn btn-primary" onClick={toggleFlag}>
        {flag ? 'HIDE' :'SHOW'}
      </button>
    </>
  );
}
