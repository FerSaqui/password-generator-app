import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { PasswordGeneratorApp } from './components/PasswordGeneratorApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PasswordGeneratorApp />
  </React.StrictMode>,
)
