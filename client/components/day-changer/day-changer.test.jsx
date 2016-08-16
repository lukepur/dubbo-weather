jest.dontMock('./day-changer.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import sinon from 'sinon';

var DayChanger = require('./day-changer.jsx').default;

describe('DayChanger component', () => {

  let node, spy;

  beforeEach(function () {
    spy = sinon.stub();
    var componentInstance = TestUtils.renderIntoDocument(<DayChanger changeDay={spy} label="My Button" />);
    node = ReactDOM.findDOMNode(componentInstance);
  });

  it('should render', () => {
    expect(node.textContent).toEqual('My Button');
  });

  it('should call the callback when clicked', function () {
    TestUtils.Simulate.click(node);
    expect(spy.called).toEqual(true);
  });
});
