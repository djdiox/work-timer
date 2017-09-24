import { createStore, compose } from 'redux';
import rootReducer from './reducers/reducer';
import { firebase as fbConfig } from './config';
import { reactReduxFirebase } from 'react-redux-firebase';

export default function configureStore (initialState, history) {
  const createStoreWithMiddleware = compose(
    reactReduxFirebase(fbConfig,
      {
        userProfile: 'users',
        enableLogging: false
      }
    ),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  )(createStore)
  const store = createStoreWithMiddleware(rootReducer); // Middleware and Reducers creates store.

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers/reducer', () => {
      const nextRootReducer = require('./reducers/reducer');
      store.replaceReducer(nextRootReducer);
    })
  };

  return store;
}
