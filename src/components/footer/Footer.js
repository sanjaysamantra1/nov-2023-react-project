import React from "react";
import './Footer.css';

export default function Footer() {
  // return <h1 style={{backgroundColor:'dodgerblue',color:"white",textAlign:"center"}}>
  //   This is My Footer</h1>;

  return <div className="container-fluid bg-dark text-white">
    <footer className="py-3 my-4">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item"><a href="#" className="nav-link px-2 ">Home</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 ">Features</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 ">Pricing</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 ">FAQs</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 ">About</a></li>
      </ul>
      <p className="text-center">© 2021 Company, Inc</p>
    </footer>
</div>
}
