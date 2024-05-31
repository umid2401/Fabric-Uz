import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Contact from "./Components/Contact"
import Collection from "./Components/Collection"
import About from "./Components/About"
import Footer from "./Components/Footer"
import "./Styles/Global.scss"
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path='/'element={<Home/>} />
      <Route path='/contact'element={<Contact/>} />
      <Route path='/collection'element={<Collection/>} />
      <Route path='/about'element={<About/>} />
    </Routes>
    <Footer/>
  </BrowserRouter>
    </div>
    
  )
}
