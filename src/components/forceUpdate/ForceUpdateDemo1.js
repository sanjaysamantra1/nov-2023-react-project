import React, { Component } from "react";

export default class ForceUpdateDemo1 extends Component {
  counter = 0;

  increment = () => {
    this.counter = this.counter + 1;
    console.log(this.counter);
  };
  refreshPage = () => {
    this.forceUpdate();
  };

  render() {
    return (
      <div className="text-center">
        <div>ForceUpdateDemo1</div>
        <div>Counter Value is: {this.counter}</div>

        <button className="btn btn-primary m-2" onClick={this.increment}>
          Increment
        </button>
        <button className="btn btn-primary" onClick={this.refreshPage}>
          refresh
        </button>
      </div>
    );
  }
}
