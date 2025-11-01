import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
   //  " ! " - non-null assertion operator, tells ts that im sure the element is not null.
  <React.StrictMode>
   {/* explisitly imported React (for tsx). In jsx React is imported automaticaly  */}
    <App />
  </React.StrictMode>,
)
