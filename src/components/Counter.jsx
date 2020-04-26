import React, { Component } from "react";

class Counter extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  
  render() {
    return <div onClick={this.increment}>{this.state.count}</div>;
  }
}

export default Counter;
