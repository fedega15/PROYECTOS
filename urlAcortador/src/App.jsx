import {BrowserRouter, Routes, Route }from 'react-router-dom'
import './App.css'
import Create from './pages/create'
import Redirect from './pages/redirect'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Create/>}></Route>
        <Route path='u/:id' element={<Redirect/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
