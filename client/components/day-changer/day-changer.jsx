import React, { Component } from 'react';

export default class DayChanger extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button onClick={this.props.changeDay} className="btn btn-sm">
        {this.props.label}
      </button>
    );
  }
};
