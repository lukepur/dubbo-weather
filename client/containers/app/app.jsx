import React, { Component } from 'react';
import axios from 'axios';

import { WEATHER_ENDPOINT, LOCATION_URL } from './constants.js';
import WeatherContainer from '../weather/weather.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: []
    };
    this.fetch = this.fetch.bind(this);
  }

  componentDidMount() {
    this.fetch();
  }

  render() {
    return (
      <div className="container grid-960">
        <div className="columns">
          <main className="column col-12 app">
            <h1 className="app-title">Dubbo 
              <sup><a href={LOCATION_URL}
                 target="_blank" className="btn btn-link btn-sm">(where?)</a></sup></h1>
            <h2>5-Day Weather <button className="btn btn-sm" onClick={this.fetch}>Refresh</button></h2>
            <WeatherContainer {...this.state} />
          </main>
        </div>
      </div>
    );
  }

  fetch() {
    axios.get(WEATHER_ENDPOINT)
    .then((response) => {
      this.setState({weatherData: response.data})
    });
  }
}

export default App;
