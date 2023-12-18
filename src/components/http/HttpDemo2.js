import React, { useEffect } from "react";
import axios from "axios";

export default function HttpDemo2() {
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((resp) => {
      console.log(resp.data);
    });
  });
  return <div>HttpDemo2</div>;
}
