jest.dontMock('./weather.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

var Weather = require('./weather.jsx').default;

describe('Weather component', () => {

  let weatherData, node;

  beforeEach(function () {
    weatherData = [
      {
        date: 'Mon 10 Dec',
        max: '10',
        min: '1',
        description: 'rain'
      },
      {
        date: 'Tue 11 Dec',
        max: '12',
        min: '8',
        description: 'cloudy'
      },
      {
        date: 'Wed 12 Dec',
        max: '13',
        min: '6',
        description: 'sunny'
      }
    ];

    var componentInstance = TestUtils.renderIntoDocument(<Weather weatherData={weatherData} />);
    node = ReactDOM.findDOMNode(componentInstance);
  });

  it('should render', () => {
    expect(node.querySelectorAll('.selected-day').length).toEqual(1);
  });

  it('should render first item by default', () => {
    expect(node.querySelector('.selected-day').textContent).toContain('Mon 10 Dec');
  });

  it('should render 2 day changer buttons', () => {
    expect(node.querySelectorAll('button').length).toEqual(2);
  });

  it('should render correct number of pills', function () {
    expect(node.querySelectorAll('.weather-pill').length).toEqual(3);
  });

  describe('click next button', function() {
    it('should select next day', function () {
      TestUtils.Simulate.click(node.querySelectorAll('button')[1]); 
      expect(node.querySelector('.selected-day').textContent).toContain('Tue 11 Dec');
    });

    it('should wrap to beginning', function () {
      var nextButton = node.querySelectorAll('button')[1];
      TestUtils.Simulate.click(nextButton); 
      TestUtils.Simulate.click(nextButton); 
      TestUtils.Simulate.click(nextButton);
      expect(node.querySelector('.selected-day').textContent).toContain('Mon 10 Dec');
    });
  });

  describe('click previous button', function() {
    
    it('should select last day (wrap)', function () {
      TestUtils.Simulate.click(node.querySelectorAll('button')[0]); 
      expect(node.querySelector('.selected-day').textContent).toContain('Wed 12 Dec');
    });

    it('should select previous day', function () {
      TestUtils.Simulate.click(node.querySelectorAll('button')[0]); 
      TestUtils.Simulate.click(node.querySelectorAll('button')[0]); 
      expect(node.querySelector('.selected-day').textContent).toContain('Tue 11 Dec');
    });
  });

  describe('click pill', function() {
    it('should select clicked pill', function () {
      TestUtils.Simulate.click(node.querySelectorAll('.weather-pill')[2]); 
      expect(node.querySelector('.selected-day').textContent).toContain('Wed 12 Dec');
    });
  });
});
