import React, { Component } from 'react';

import DayChanger from '../../components/day-changer/day-changer.jsx';
import WeatherCard from '../../components/weather-card/weather-card.jsx';
import WeatherPill from '../../components/weather-pill/weather-pill.jsx';

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
    const length = this.props.weatherData.length;
    this.setState({selectedDay: (this.state.selectedDay + 1) % length});
  }

  selectPreviousDay() {
    const upper = this.props.weatherData.length-1;
    const updatedDay = this.state.selectedDay - 1;
    this.setState({selectedDay: updatedDay < 0 ? upper : updatedDay});
  }

  setSelected(index) {
    this.setState({selectedDay:index});
  }
}

Weather.defaultProps = {
  weatherData: []
};

export default Weather;
