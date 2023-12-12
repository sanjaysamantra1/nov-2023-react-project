import React, { Component } from "react";

export default class OddNumber extends Component {
  intervalId;

  componentDidMount() {
    console.log("OddNumber Mounted");
    this.intervalId = setInterval(() => {
      console.log("Hi I am setInterval from OddNumber Component");
    }, 1000);
  }

  render() {
    console.log("OddNumber render");
    return <h1>{this.props.num} is Odd</h1>;
  }

  componentWillUnmount() {
    console.log("OddNumber component is about to be destroyed");
    clearInterval(this.intervalId);
  }
}
