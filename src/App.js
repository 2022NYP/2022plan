import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import * as P from './Pages'
import GlobalStyle from './Components/GlobalStyle'
import React from 'react'

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<P.Login />} />
          <Route path="/plan" element={<P.Plan />} />
          <Route path="/share" element={<P.Share />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
