import React, { Component } from "react";
import EvenNumber from "./EvenNumber";
import OddNumber from "./OddNumber";

export default class LifecycleDemo3 extends Component {
  state = {
    num: 4,
  };
  increment = () => {
    this.setState({ num: this.state.num + 1 });
  };
  render() {
    return (
      <>
        <h1>This is LifecycleDemo3 Component</h1>
        <button onClick={this.increment}>Increment</button>

        {this.state.num % 2 === 0 ? (
          <EvenNumber num={this.state.num} />
        ) : (
          <OddNumber num={this.state.num} />
        )}
      </>
    );
  }
}
