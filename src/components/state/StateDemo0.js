import React, { Component } from "react";

export default class StateDemo0 extends Component {
  counter = 0;

  increment = () => {
    this.counter = this.counter + 1;
    console.log(this.counter);
  };

  render() {
    console.log("Render Called...");
    return (
      <div className="text-center">
        <div>State Demo-0</div>
        <div>Counter Value is: {this.counter}</div>

        <button className="btn btn-primary m-2" onClick={this.increment}>
          Increment
        </button>
      </div>
    );
  }
}
