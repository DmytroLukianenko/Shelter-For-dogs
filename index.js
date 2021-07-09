import React from 'react'
import ReactDOM from 'react-dom'
import App from './src/App'
import '../node_modules/modern-normalize/modern-normalize.css'
import store from './src/Redux/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
