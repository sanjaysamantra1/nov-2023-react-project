import React, { Component } from "react";

export default class RefDemo1 extends Component {
  constructor(props) {
    super(props);

    this.myRef1 = React.createRef();
    this.myRef2 = React.createRef();
  }
  addition = () => {
    console.log(this.myRef1);
    const num1 = +this.myRef1.current.value;
    const num2 = +this.myRef2.current.value;
    console.log(num1 + num2);
  };

  render() {
    return (
      <>
        <div className="border-primary">
          First Number:
          <input type="number" ref={this.myRef1} /> <br />
          <br />
          Second Number:
          <input type="number" ref={this.myRef2} /> <br />
          <br />
          <button onClick={this.addition}>Add</button>
        </div>
      </>
    );
  }
}
