import React from "react";
import './Categories.css';

export default function Category(props) {
  return (
    <div className="text-center category">
      <img src={props.categoryInfo.img_url} alt='not available' />
      <div>{props.categoryInfo.name}</div>
    </div>
  );
}
