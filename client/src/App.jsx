import { useState } from 'react'
import './App.css'
// import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Services from './components/Services/Services'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        {/* <Navbar /> */}
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
