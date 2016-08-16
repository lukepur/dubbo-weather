jest.dontMock('./app.jsx');
jest.dontMock('../weather/weather.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

var App = require('./App.jsx').default;

describe('App component', () => {

  it('should render', () => {

    var componentInstance = TestUtils.renderIntoDocument(<App/>);
    var node = ReactDOM.findDOMNode(componentInstance);

    expect(node.textContent).toContain('Dubbo');
  });
});
