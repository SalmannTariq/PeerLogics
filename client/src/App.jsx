import { useState } from 'react'
import './App.css'
// import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'
import Web from './components/Services Data/Web'
import UiUx from './components/Services Data/UiUx'
import MedicalBilling from './components/Services Data/MedicalBilling'
import Ecommerce from './components/Services Data/Ecommerce'
import SoftwareDevelopment from './components/Services Data/SoftwareDevelopment'
import MedHrMang from './components/Services Data/MedHrMang'

function App() {

  return (
    <>
        {/* <Navbar /> */}
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/web-development" element={<Web/>} />
          <Route path="/ui-ux" element={<UiUx />} />
          <Route path="/medical-billing" element={<MedicalBilling />} />
          <Route path="/e-commerce" element={<Ecommerce />} />
          <Route path="/software-development" element={<SoftwareDevelopment />} />
          <Route path="/medical-hr-management" element={<MedHrMang />} />
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
