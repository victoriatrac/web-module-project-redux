import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'

import 'bulma/css/bulma.css'
import './styles.scss'

const rootElement = document.getElementById('root')
// ReactDOM.render(<Provider><App /></Provider>, rootElement)
ReactDOM.render(<App />, rootElement)