// src/Notifications.test.js
import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications component tests', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders three list items', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('li').length).toBe(3);
  });

  it('renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('p').text()).toContain('Here is the list of notifications');
  });
});
