import React from "react";
import { useState } from "react";

export default function FormDemo1() {
  const [name, setName] = useState("sachin");
  const [pwd, setPwd] = useState("abcd");

  const submitMyForm = (e) => {
    e.preventDefault();
    console.log(name, pwd);
  };

  return (
    <>
      <form onSubmit={submitMyForm}>
        <p>
          Name :{" "}
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </p>
        <p>
          Password :{" "}
          <input
            type="password"
            value={pwd}
            onChange={(e) => {
              setPwd(e.target.value);
            }}
          />
        </p>
        <input type="submit" value="Login" />
      </form>
    </>
  );
}
