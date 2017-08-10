import { AsyncStorage } from 'react-native'
import { createStore, applyMiddleware, compose } from 'redux'
import Reactotron from 'reactotron-react-native' // eslint-disable-line
import thunk from 'redux-thunk'
import { autoRehydrate, persistStore } from 'redux-persist'
import rootReducer from './reducers'

export default function configure(onComplete) {
  let storeCreator = createStore
  if (__DEV__) {
    storeCreator = Reactotron.createStore
  }
  const store = storeCreator(
    rootReducer,
    undefined,
    compose(
      applyMiddleware(thunk),
      autoRehydrate(),
    ),
  )
  persistStore(store, { storage: AsyncStorage, blacklist: ['nav'] }, onComplete)
  return store
}
