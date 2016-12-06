import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { Router, Route, hashHistory } from 'react-router'
import thunk from 'redux-thunk';
import rootReducer from './reducers/index'
import AppController from './controllers/App'
import _ from 'underscore'

const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="*" component={AppController} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
