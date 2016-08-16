jest.dontMock('./weather-card.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

var WeatherCard = require('./weather-card.jsx').default;

describe('WeatherCard component', () => {

  let node, data;

  beforeEach(function () {
    data = {
      date: 'Mon 10 Dec',
      max: '10',
      min: '2',
      description: 'rainy'
    };
    var componentInstance = TestUtils.renderIntoDocument(<WeatherCard data={data}/>);
    node = ReactDOM.findDOMNode(componentInstance);
  });

  it('should render all data', () => {
    expect(node.textContent).toContain('Mon 10 Dec');
    expect(node.textContent).toContain('10°C');
    expect(node.textContent).toContain('2°');
    expect(node.textContent).toContain('rainy');
  });
});
