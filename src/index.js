import React from 'react'
import ReactDOM from 'react-dom'
import './assets/css/index.css'
import App from './pages/App'
import { Provider } from 'react-redux'
import store from './store/store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);