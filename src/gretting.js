import React from "react";

export class GrettingComponent extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return <h3>Hello {this.props.name}. </h3>;
  }
}