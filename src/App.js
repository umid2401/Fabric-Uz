import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Contact from "./Components/Contact"
import Collection from "./Components/Collection"
import About from "./Components/About"
import Footer from "./Components/Footer"
import "./Styles/Global.scss"
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import ProductDetail from './Components/ProductDetail'

export default function App() {
  const data={
    token:"7251505390:AAFhBgcMHUezmrBjUWo0SrRk7Xq5WWJSQlU",
    id:"6479931688",
  }
  return (
    <div className="app">
      <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path='/'element={<Home />} />
      <Route path='/contact'element={<Contact data={data}/>} />
      <Route path='/collection'element={<Collection/>} />
      <Route path='/about'element={<About/>} />
      <Route path='/:id' element={<ProductDetail data={data}/>}/>
    </Routes>
    <Footer data={data}/>
  </BrowserRouter>
    </div>
    
  )
}
