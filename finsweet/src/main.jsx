import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./Assets/css/style.css"
import 'bootstrap/dist/css/bootstrap-grid.css'
import { BrowserRouter } from 'react-router-dom'
import 'atropos/css'

ReactDOM.createRoot(document.getElementById('root')).render(
   <BrowserRouter>
   <App />
   </BrowserRouter>    
)
 