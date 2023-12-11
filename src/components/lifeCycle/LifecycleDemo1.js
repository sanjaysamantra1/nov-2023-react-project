import React, { Component } from "react";

export default class LifecycleDemo1 extends Component {
  sayHi() {
    console.log("Hiiiiii");
  }
  constructor(props) {
    super(props);
    console.log("Contsructor");
    this.state = {
      color: "red",
    };
    // this.setState({color:'blue'})
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return { color: props.color };
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  render() {
    console.log("render");
    return <div>LifecycleDemo1 - {this.state.color}</div>;
  }
}
