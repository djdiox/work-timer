// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import registerServiceWorker from './registerServiceWorker';

export const history = createHistory();

const middleware = [thunk, routerMiddleware(history)];
export const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(...middleware),
  // other store enhancers if any
));
registerServiceWorker();
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
