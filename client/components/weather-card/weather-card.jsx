import React, { Component } from 'react';

export default class WeatherCard extends Component {
  render() {
    const d = this.props.data;
    return (
      <div className="weather-card">
        <div className="weather-card__date">{d.date}</div>
        <div className="weather-card__temp">{d.max}°C</div>
        <div className="weather-card__range">
          <span className="weather-card__min-temp">{d.min}°</span>
          <span className="weather-card__temp-separator"> - </span>
          <span className="weather-card__max-temp">{d.max}°C</span>
        </div>
        <div className="weather-card__description">{d.description}</div>
      </div>
    );
  }
}

WeatherCard.defaultProps = {
  data: {}
};
