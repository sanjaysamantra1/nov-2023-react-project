/* import React from "react";
export default function GreetDemo1(props) {
  console.log(props);
  return <h2> Hii {props.name} , {props.msg} !!!</h2>;
} */

import React, { Component } from 'react'

export default class GreetDemo1 extends Component {
  
  render() {
    return <h2> Hii {this.props.name} , {this.props.msg} !!!</h2>;
  }
}

