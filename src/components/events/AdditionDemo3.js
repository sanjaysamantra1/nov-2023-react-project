import React, { Component } from "react";

export default class AdditionDemo3 extends Component {
  state = {
    num1: 0,
    num2: 0,
    result: "",
  };
  /* changeHandler1 = (event) => {
    let value = +event.target.value;
    this.setState({ num1: value });
  };
  changeHandler2 = (event) => {
    let value = +event.target.value;
    this.setState({ num2: value });
  }; */ 

  changeHandler = (event) => {
    let value = +event.target.value;
    let name = event.target.name;
    this.setState({ [name]: value });
  }

  addition = () => {
    this.setState({
      result: `Addition of ${this.state.num1} & ${this.state.num2} is ${
        this.state.num1 + this.state.num2
      }`,
    });
  };
  render() {
    return (
      <>
        <h1>Addition Demo -3</h1>

        <input type="number" name="num1" onChange={this.changeHandler} />
        <input type="number" name="num2" onChange={this.changeHandler} />

        <button onClick={this.addition}>Add</button>

        <div>{this.state.result}</div>
      </>
    );
  }
}
