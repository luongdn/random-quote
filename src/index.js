import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import configureStore from './store/configureStore'

render(
  <Provider store={configureStore()}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
)

module.hot.accept()
