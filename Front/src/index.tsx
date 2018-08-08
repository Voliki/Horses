import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createBrowserHistory from 'history/createBrowserHistory';
import { composeWithDevTools } from 'redux-devtools-extension';

import { getRoutes } from './routers/getRoutes';
import createReducer from './reducers/rootReducer';
import { initialState } from './reducers/initialState';

const history = createBrowserHistory();

const _routerMiddleware = routerMiddleware(history);

const store = createStore(
  createReducer({}),
  initialState,
  composeWithDevTools(
    applyMiddleware(
      thunk,
      _routerMiddleware
    )
  )
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {getRoutes()}
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);
