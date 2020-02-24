import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import store from '../store';
import { Provider } from 'react-redux';

describe('App component', () => {
  it('renders App', () => {
    const wrapper = shallow(<Provider store={store}><App /></Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});
  