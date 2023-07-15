import React from 'react'
import './App.css'
import Navbar from './Navbar/Navbar'
import Footer from './component/Footer'
import Home from './component/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import pic from './assets/r6.png';
import real from './assets/dec1.png';


function App() {
  
  return (
    <div className='app-container'>
      <BrowserRouter>
      <div className="navbar">
      <div className="bg-img">
                <div className="bg1"><img src={real}/></div>
                <div className="bg2"><img src={pic}/></div>
            </div>
      <Navbar />

      </div>

      <div className="home">
      <Routes>
      <Route path='/' element={<Home />} />
      </Routes>
      </div>
      <Footer />

      </BrowserRouter>
    </div>
  )
}

export default App
