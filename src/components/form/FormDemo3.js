import React from "react";
import { useState } from "react";

export default function FormDemo3() {
  const [name, setName] = useState("sachin");
  const [pwd, setPwd] = useState("abcd");
  const [nameErrMsg, setNameErrMsg] = useState("");

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
              if (e.target.value.length < 5) {
                setNameErrMsg("Name must be at least 5 characters");
              }else{
                setNameErrMsg("");
              }
            }}
          />
          <span className="text-danger">{nameErrMsg}</span>
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
