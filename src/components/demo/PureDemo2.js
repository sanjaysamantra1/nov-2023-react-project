import React, { useState } from "react";

export default function PureDemo2() {
  const [color, setColor] = useState("red");

  const changeColor = () => {
    setColor("red");
  };
  const changeColor2 = () => {
    setColor("blue");
  };

  return (
    <>
      {console.log('render()')}
      <div>Color value is:: {color}</div>
      <button onClick={changeColor}>Change Color</button>
      <button onClick={changeColor2}>Change Color-2</button>
    </>
  );
}
