import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from '../App/reducers'

const configureStore = preloadedState => {
  const middlewares = [thunk]

  if(process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger())
  }

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(...middlewares)
    )
  )

  if(module.hot) {
    module.hot.accept('../App/reducers', () => {
      const nextRootReducer = require('../App/reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default configureStore
