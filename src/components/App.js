import React from 'react';
import { Provider } from 'react-redux';
import Home from './Home';
import configureStore from '../store';
import './App.css';
import moment from 'moment';
const initialState = window.__INITIAL_STATE__ || { firebase: { authError: null }, startDate: moment(), isStartPickerVisible:false };
const store = configureStore(initialState);

export default () => (
  <Provider store={store}>
    <Home />
  </Provider>
);
