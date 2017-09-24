import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { reactReduxFirebase, firebaseStateReducer } from 'react-redux-firebase'
import createHistory from 'history/createBrowserHistory';

import registerServiceWorker from './registerServiceWorker';

import App from './components/App';
import reducer from './reducers';

const firebaseConfig  = {
  apiKey: "AIzaSyDPoC9tZoTTVo-SdBnGr9W6vDZ_KfNCBp0",
  authDomain: "office-work-timer.firebaseapp.com",
  databaseURL: "https://office-work-timer.firebaseio.com",
  projectId: "office-work-timer",
  storageBucket: "office-work-timer.appspot.com",
  messagingSenderId: "775698839882"
};
export const history = createHistory();

const middleware = [thunk, routerMiddleware(history)];


const createStoreWithFirebase = compose(
  reactReduxFirebase(firebaseConfig, reduxFirebaseConfig),
)(createStore);

const reduxFirebaseConfig = { userProfile: 'users' };
const rootReducer = combineReducers({
  firebase: firebaseStateReducer,
  todo: reducer
});

const store = createStoreWithFirebase(rootReducer, composeWithDevTools(
  applyMiddleware(...middleware),
  // other store enhancers if any
));

export default store;

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
