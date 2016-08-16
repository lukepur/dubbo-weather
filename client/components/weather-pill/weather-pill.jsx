import React, { Component } from 'react';

export default class WeatherPill extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const item = this.props.data;
    const selected = this.props.selected
    const [day, date, month] = item.date.split(' ')
    const opts = {
      disabled: selected,
      onClick: this.props.setSelected.bind(this, this.props.id)
    };
    return (
      <div {...opts} className={'weather-pill btn btn-primary ' + (selected ? 'weather-pill--selected btn-disabled' : '')}>
        <span className="weather-pill__day">{day}</span>
        <span className="weather-pill__date">{date} {month}</span>
        <span className="weather-pill__temp">{item.max}°C</span>
      </div>
    );
  }
}
