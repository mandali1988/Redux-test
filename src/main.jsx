import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ExampleState from './components/Context/ExampleState.jsx'
 

createRoot(document.getElementById('root')).render(
  <ExampleState>
    <App />
  </ExampleState>
)
