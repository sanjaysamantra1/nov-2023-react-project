import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Aboutus() {
  const navigate = useNavigate();

  const doSomethingAndGoToHome = () => {
    console.log("Do Something.....");
    navigate("/home");
  };

  return (
    <>
      <h1>This is Aboutus Component</h1>

      <a href="home" className="m-2">
        Go to Home Page
      </a>
      {/* Not Recomended */}

      <Link to="/home">go to Home</Link>
      <button onClick={doSomethingAndGoToHome}>Do SOmething & GoTo Home</button>
      <hr/>

      <button onClick={()=>navigate(-2)} className="m-2"> Prev</button>
      <button onClick={()=>navigate(1)}>Next</button>
    </>
  );
}
