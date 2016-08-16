jest.dontMock('./weather-pill.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import sinon from 'sinon';

var WeatherPill = require('./weather-pill.jsx').default;

describe('WeatherPill component', () => {

  let node, spy, data;

  beforeEach(function () {   
    data = {
      date: 'Mon 10 Dec',
      max: '10',
      min: '2',
      description: 'rainy'
    };
    spy = sinon.stub();
  });

  it('should render', () => {
    var componentInstance = TestUtils.renderIntoDocument(<WeatherPill data={data} selected={false} setSelected={spy}/>);
    node = ReactDOM.findDOMNode(componentInstance);
    expect(node.textContent).toContain('Mon');
  });

  describe('is not selected', function() {
    beforeEach(function () {
      var componentInstance = TestUtils.renderIntoDocument(<WeatherPill data={data} selected={false} setSelected={spy}/>);
      node = ReactDOM.findDOMNode(componentInstance);
    });

    it('should not add selected class', function () {
      expect(node.classList.contains('weather-pill--selected')).toEqual(false);
    });

    it('should add disabled state', function () {
      expect(node.getAttribute('disabled')).toEqual(null);
    });
  });

  describe('is currently selected', function() {
    beforeEach(function () {
      var componentInstance = TestUtils.renderIntoDocument(<WeatherPill data={data} selected={true} setSelected={spy}/>);
      node = ReactDOM.findDOMNode(componentInstance);
    });

    it('should add selected class', function () {
      expect(node.classList.contains('weather-pill--selected')).toEqual(true);
    });

    it('should add disabled state', function () {
      expect(node.getAttribute('disabled')).not.toEqual(null);
    });

    it('should invoke callback when clicked', function () {
      TestUtils.Simulate.click(node);
      expect(spy.called).toEqual(true);
    });
  });

});
