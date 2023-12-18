import React, { useEffect } from "react";
import client from "../../utils/client";

export default function HttpDemo3() {
  useEffect(() => {
    client.get('users').then((resp) => {
        console.log(resp.data);
    });
  });
  return <div>HttpDemo3</div>;
}
