import React, { Component } from "react";

export default class StateDemo1 extends Component {
  state = {
    counter: 0,
  };

  increment = () => {
    this.setState({ counter: this.state.counter + 1 }); // async operation
  };

  render() {
    console.log("Render Called...");
    return (
      <div className="text-center">
        <div>State Demo-0</div>
        <div>Counter Value is: {this.state.counter}</div>

        <button className="btn btn-primary m-2" onClick={this.increment}>
          Increment
        </button>
      </div>
    );
  }
}
