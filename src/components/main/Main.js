import React from "react";
import Demo1 from "../demo1/Demo1";
import CssModule from "../cssModule/CssModule";
import ConditionalCSS from "../conditionalCSS/ConditionalCSS";
import ConditionalDemo1 from "../conditionalRendering/ConditionalDemo1";
import ConditionalDemo2 from "../conditionalRendering/ConditionalDemo2";
import ConditionalDemo3 from "../conditionalRendering/ConditionalDemo3";
import ConditionalDemo4 from "../conditionalRendering/ConditionalDemo4";

export default function Main() {
  console.log(React);
  return (
    <div style={{ minHeight: "400px" }}>
      {/* <Demo1 /> */}
      {/* <CssModule /> */}
      {/* <ConditionalCSS /> */}
      {/* <ConditionalDemo1 /> */}
      {/* <ConditionalDemo2 /> */}
      {/* <ConditionalDemo3 /> */}
      <ConditionalDemo4 />
    </div>
  );
}
