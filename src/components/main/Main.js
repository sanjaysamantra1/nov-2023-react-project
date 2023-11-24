import React from "react";
import Demo1 from "../demo1/Demo1";
import CssModule from "../cssModule/CssModule";
import ConditionalCSS from "../conditionalCSS/ConditionalCSS";
import ConditionalDemo1 from "../conditionalRendering/ConditionalDemo1";
import ConditionalDemo2 from "../conditionalRendering/ConditionalDemo2";
import ConditionalDemo3 from "../conditionalRendering/ConditionalDemo3";
import ConditionalDemo4 from "../conditionalRendering/ConditionalDemo4";
import ListDemo1 from "../List/ListDemo1";
import ListDemo2 from "../List/ListDemo2";
import ListDemo3 from "../List/ListDemo3";
import ListDemo4 from "../List/ListDemo4";

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
      {/* <ConditionalDemo4 /> */}
      {/* <ListDemo1 /> */}
      {/* <ListDemo2 /> */}
      {/* <ListDemo3 /> */}
      <ListDemo4 />
    </div>
  );
}
