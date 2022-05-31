import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

//Renderizando o componente "app" dentro do id root na div html
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
