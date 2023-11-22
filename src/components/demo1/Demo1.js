import React, { Component } from "react";

// function Demo1() {
//   return (
//     <>
//       <div>Demo1</div>
//       <p>This is a Paragraph</p>
//     </>
//   );
// }

class Demo1 extends Component {
  a  = 10;
  render() {
    function formatName(user) {
      return user.firstName + " " + user.lastName;
    }
    let user = {
      firstName: "sanjay",
      lastName: "samantra",
    };
    let img_url =
      "https://www.cricbuzz.com/a/img/v1/152x152/i1/c171004/sachin-tendulkar.jpg";

    return (
      <div>
        <h2 id={user.firstName}>React Version is {React.version}</h2>
        <h2>{1 + 1}</h2>
        <h2>my name is- {user.firstName}</h2>
        <h2>my full name is- {formatName(user)}</h2>
        <h2>my a value is - {this.a}</h2>
        <img src={img_url} />
      </div>
    );
  }
}

export default Demo1;
