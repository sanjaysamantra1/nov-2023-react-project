import React, { Component } from "react";

export default class EvenNumber extends Component {
  intervalId;

  componentDidMount() {
    console.log("EvenNumber Mounted");
    this.intervalId = setInterval(() => {
      console.log("Hi I am setInterval from EvenNumber Component");
    }, 1000);
  }
  render() {
    console.log("EvenNumber render");
    return <h1>{this.props.num} is Even</h1>;
  }
  componentWillUnmount() {
    console.log("EvenNumber component is about to be destroyed");
    clearInterval(this.intervalId);
  }
}
