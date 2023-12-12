import React, { Component, PureComponent } from "react";

export default class LifecycleDemo2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "red",
    };
  }
  changeColor = () => {
    this.setState({ color: "blue" });
  };
  shouldComponentUpdate() {
    console.log("should component update")
    // logic
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML =
      "Before the update, the color was " + prevState.color;
    console.log("getSnapshotBeforeUpdate")
  }
  componentDidUpdate() {
    document.getElementById("div2").innerHTML =
      "The updated color is " + this.state.color;
      console.log("componentDidUpdate")
  }
  render() {
    console.log("render");
    return (
      <>
        <div>LifecycleDemo2</div>
        <div>
          Color vaue is <b>{this.state.color}</b>
        </div>

        <button onClick={this.changeColor}>Change Color</button>

        <div id="div1"></div>
        <div id="div2"></div>
      </>
    );
  }
}
