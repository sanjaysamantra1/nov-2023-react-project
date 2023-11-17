import React from "react";

export default function Footer() {
  // return <h1 style={{backgroundColor:'dodgerblue',color:"white",textAlign:"center"}}>
  //   This is My Footer</h1>;

  return <div class="container-fluid">
    <footer class="bg-dark text-white">
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item"><a href="#" class="nav-link px-2 ">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 ">Features</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 ">Pricing</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 ">FAQs</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 ">About</a></li>
      </ul>
      <p class="text-center">© 2021 Company, Inc</p>
    </footer>
</div>
}
