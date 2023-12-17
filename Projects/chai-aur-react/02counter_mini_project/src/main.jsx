import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Below, ReactDOM fetches the element on which it will compare its own virtual DOM/ DOM tree.
// And render accordingly, to reconcile the differences between the two.

// App is basically a function only. Thus, <App /> == App(). This is made possible by Babel.
// Functional components return HTML like syntax.
// Babel converts it to key value pairs which can then be used to create/update virtual DOM.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
