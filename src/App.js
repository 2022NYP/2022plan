import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import * as P from './Pages'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<P.Start />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
