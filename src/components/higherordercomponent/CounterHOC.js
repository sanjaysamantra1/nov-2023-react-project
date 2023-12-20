import React, { useState } from "react";

const UpdatedComponent = (OriginalComponent) => {
  function CounterHOC() {
    const [count, setCount] = useState(0);
    const increment = () => {
      setCount(count + 1);
    };
    return <OriginalComponent count={count} increment={increment} />;
  }
  return CounterHOC;
};
export default UpdatedComponent;
