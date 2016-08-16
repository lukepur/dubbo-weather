import React, { Component } from 'react';
import axios from 'axios';

import { WEATHER_ENDPOINT } from './constants';
import WeatherContainer from '../weather/weather';

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
              <sup><a href="https://www.google.co.uk/maps/place/Dubbo+NSW+2830,+Australia/@-32.9381294,140.3825626,5.47z/data=!4m5!3m4!1s0x6b0f71b04ca4913b:0x50609b490442530!8m2!3d-32.2315018!4d148.6329645"
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
