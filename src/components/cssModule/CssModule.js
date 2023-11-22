import React from "react";
import styleObj from  "./File1.module.css";
import "./File2.css";

export default function CssModule() {
  return (
    <>
      <div className={`${styleObj.class1} class3 ${styleObj.class2}`}>This is div-1</div>
      <br/>
      <div className="class1 class2 class3">This is div-2</div>
    </>
  );
}
