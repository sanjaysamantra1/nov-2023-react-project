import React from "react";
import PropTypes from 'prop-types'

export default function GreetDemo1({name,msg='Good Evening'}) {
  return <h2> Hii {name} , {msg} !!!</h2>;
}
GreetDemo1.propTypes = {
  name : PropTypes.string.isRequired,
  msg : PropTypes.string
}

/* import React, { Component } from 'react';
export default class GreetDemo1 extends Component {  
  render() {
    let {name, msg} = this.props;
    return <h2> Hii {name} , {msg} !!!</h2>;
  }
} */

