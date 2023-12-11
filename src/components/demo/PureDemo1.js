import React, { Component, PureComponent } from "react";
import MemoDemo1 from "./MemoDemo1";

export default class PureDemo1 extends PureComponent {
  state = {
    color: "red",
    name: "Sachin",
  };

  changeColor = () => {
    this.setState({ color: "blue" });
  };
  changeName = () => {
    this.setState({ name: "Rahul" });
  };

  render() {
    console.log("Parent Render() called...");
    return (
      <>
        <div>Color value is:: {this.state.color}</div>
        <button onClick={this.changeColor}>Change Color</button>
        <button onClick={this.changeName}>Change Name</button>

        <MemoDemo1 color={this.state.color} />
      </>
    );
  }
}
