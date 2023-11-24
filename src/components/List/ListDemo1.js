import React from "react";

export default function ListDemo1() {
  let cities = ["Bangalore", "Hyderabad", "Chennai", "Pune",'Delhi'];

  let myLIs = cities.map(city=><li>{city}</li>)
  console.log(myLIs);

  return (
    <>
      <ul>
        {myLIs}
      </ul>
    </>
  );
}
