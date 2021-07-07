import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import '../node_modules/modern-normalize/modern-normalize.css'
import '../src/assets/styles/index.css'
import store, { persistor } from './Redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

console.log(store.getState())
// console.log(allShelters())
ReactDOM.render(
  <Provider store={store}>
    {/* <PersistGate persistor={persistor}> */}
    <App />
    {/* </PersistGate> */}
  </Provider>,
  document.getElementById('root')
)
