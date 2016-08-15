import React, { Component } from 'react';
import WeatherContainer from '../weather/weather'

class App extends Component {
  render() {
    if (this.props.items.length === 0) {
      return (
        <p ref="empty">Index is empty.</p>
      );
    }

    return (
      <main>
        <h1>Dubbo</h1>
        <h2>5-Day Weather</h2>
        <WeatherContainer></WeatherContainer>
      </main>
    );
  }
}

App.defaultProps = {
  items: []
};

export default App;
