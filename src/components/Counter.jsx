import React, { Component } from "react";

class Counter extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialValue ? props.initialValue : 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + this.props.step });
  };

  decrement = () => {
    if (this.state.count - this.props.step >= 0) {
      this.setState({ count: this.state.count - this.props.step });
    } else {
      this.setState({ count: 0 });
    }
  };

  render() {
    return (
      <div className='Counter'>
        <h3>Component Counter</h3>
        <div className='main'>
          <button onClick={this.decrement}>-</button>
          <span>{this.state.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}

export default Counter;
