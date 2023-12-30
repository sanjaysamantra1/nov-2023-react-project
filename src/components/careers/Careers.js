import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Careers() {
  return (
    <>
      <h1 className="text-center">This is Careers Component</h1>
      <hr />
      <Link to="permanentjobs" className="m-1">Permanent Jobs</Link>
      <Link to="contractjobs">Contract Jobs</Link>

      <Outlet />
    </>
  );
}
