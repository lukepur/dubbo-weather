import React, { Component } from 'react';

class Weather extends Component {
  render() {
    return (
      <div>I am the weather</div>
    );
  }
}

Weather.defaultProps = {
  items: []
};

export default Weather;
