import React, { Component } from 'react';

import DayChanger from '../../components/day-changer/day-changer';
import WeatherCard from '../../components/weather-card/weather-card';
import WeatherPill from '../../components/weather-pill/weather-pill';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDay: 0
    }
    this.selectNextDay = this.selectNextDay.bind(this);
    this.selectPreviousDay = this.selectPreviousDay.bind(this);
    this.setSelected = this.setSelected.bind(this);
  }

  render() {
    const selectedDay = this.state.selectedDay;
    const weatherData = this.props.weatherData;
    return (
      <div>
        <div className="selected-day">
          <DayChanger changeDay={this.selectPreviousDay} label="<"/>
          <WeatherCard data={weatherData[selectedDay]} />
          <DayChanger changeDay={this.selectNextDay} label=">"/>
        </div>
        <div className="weather-pills pagination">
          {
            weatherData.map((item, index) => 
              <WeatherPill
                data={item} 
                selected={index === selectedDay}
                key={index}
                id={index}
                setSelected={this.setSelected}/>
            )
          }
        </div>
      </div>
    );
  }

  selectNextDay() {
    const data = this.props.weatherData;
    let selectedDay;
    if (data.length === 0) {
      selectedDay = 0;
    } else {
      selectedDay = this.state.selectedDay === data.length - 1 ? 0 : this.state.selectedDay + 1;
    }
    this.setState({selectedDay});
  }

  selectPreviousDay() {
    const data = this.props.weatherData;
    let selectedDay;
    if (data.length === 0) {
      selectedDay = 0;
    } else {
      selectedDay = this.state.selectedDay === 0 ? data.length - 1 : this.state.selectedDay - 1;
    }
    this.setState({selectedDay});
  }

  setSelected(index) {
    this.setState({selectedDay:index});
  }
}

Weather.defaultProps = {
  weatherData: []
};

export default Weather;
