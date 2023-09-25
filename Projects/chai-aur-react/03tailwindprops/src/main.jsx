import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// The below App() gives error if we retain useState code in the App component.
//  Otherwise works.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* App() */}
  </React.StrictMode>,
)
