import React, { Component } from "react";
import { PureComponent } from "react";

class MemoDemo1 extends Component {
  state = {
    a: 10,
  };
  updateA = () => {
    this.setState({ a: 10 });
  };
  render() {
    console.log("Child Render() called...");
    return (
      <>
        <div>MemoDemo1 -- {this.props.color}</div>
        <div>a value is :: {this.state.a}</div>
        <button onClick={this.updateA}>Update A</button>
      </>
    );
  }
}
// export default MemoDemo1;
export default React.memo(MemoDemo1);
