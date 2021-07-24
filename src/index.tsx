import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'semantic-ui-css/semantic.min.css'
import Providers from "./Providers"

ReactDOM.render(
  <Providers>
    <App/>
  </Providers>,
  document.getElementById('root')
);

