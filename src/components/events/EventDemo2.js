import React, { Component } from "react";

export default class EventDemo2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "sachin",
    };
    this.f1 = this.f1.bind(this);
  }
  f1(event) {
    console.log(event)
    console.log("This is f1...");
    console.log(this.state.name);
  }
  f2 = () => {
    console.log("This is f2...");
    console.log(this.state.name);
  };
  render() {
    return (
      <>
        <div>EventDemo2</div>

        <button onClick={this.f1} className="m-2">
          invoke f1
        </button>
        <button onClick={this.f2}>invoke f2</button>
      </>
    );
  }
}
