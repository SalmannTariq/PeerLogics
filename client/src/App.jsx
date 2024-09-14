import { useState } from 'react'
import './App.css'
// import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'
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
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
