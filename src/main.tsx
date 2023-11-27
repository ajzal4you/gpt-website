import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/header/Header.tsx'
import './index.css'
import Body from './components/Body'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
    <Body/>
  </React.StrictMode>,
)
