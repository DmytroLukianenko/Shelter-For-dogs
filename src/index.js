import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'normalize.css'
import '../src/assets/styles/index.css'
import store from './Redux/store'
import { Provider } from 'react-redux'

console.log(store.getState())
ReactDOM.render(
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <App />
    {/* </PersistGate> */}
  </Provider>,
  document.getElementById('root')
)
