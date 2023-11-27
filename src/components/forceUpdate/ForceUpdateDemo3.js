import React, { Component } from "react";

export default class ForceUpdateDemo3 extends Component {
  state = {
    counter: 0,
  };

  increment = () => {
    // this.state.counter  = this.state.counter + 1;
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div className="text-center">
        <div>ForceUpdateDemo1</div>
        <div>Counter Value is: {this.state.counter}</div>

        <button className="btn btn-primary m-2" onClick={this.increment}>
          Increment
        </button>
      </div>
    );
  }
}

class Employee {
  id;
  name;
  sal;

  disp() {
    console.log(this.id, this.name, this.sal);
  }
}
