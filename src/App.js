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
  const data = [
    {
      "imgUrl": "Images/diz-69-1-768x768.jpg",
      "name": "diz-69-1-768x768",
      "season": "winter"
    },
    {
      "imgUrl": "Images/diz-16-768x768.jpg",
      "name": "diz-16-768x768",
      "season": "summer"
    },
    {
      "imgUrl": "Images/diz-17-768x768.jpg",
      "name": "diz-17-768x768",
      "season": "spring"
    },
    {
      "imgUrl": "Images/diz-19-768x768.jpg",
      "name": "diz-19-768x768",
      "season": "spring"
    },
    {
      "imgUrl": "Images/diz-20-768x768.jpg",
      "name": "diz-20-768x768",
      "season": "winter"
    },
    {
      "imgUrl": "Images/diz-25-768x768.jpg",
      "name": "diz-25-768x768",
      "season": "autumn"
    },
    {
      "imgUrl": "Images/diz-27-768x768.jpg",
      "name": "diz-27-768x768",
      "season": "summer"
    },
    {
      "imgUrl": "Images/diz-31-768x768.jpg",
      "name": "diz-31-768x768",
      "season": "spring"
    },
    {
      "imgUrl": "Images/diz-32-768x768.jpg",
      "name": "diz-32-768x768",
      "season": "winter"
    },
    {
      "imgUrl": "Images/diz-38-768x768.jpg",
      "name": "diz-38-768x768",
      "season": "autumn"
    },
    {
      "imgUrl": "Images/diz-39-768x768.jpg",
      "name": "diz-39-768x768",
      "season": "autumn"
    },
    {
      "imgUrl": "Images/diz-41-768x768.jpg",
      "name": "diz-41-768x768",
      "season": "spring"
    },
    {
      "imgUrl": "Images/diz-42-768x768.jpg",
      "name": "diz-42-768x768",
      "season": "autumn"
    },
    {
      "imgUrl": "Images/diz-43-768x768.jpg",
      "name": "diz-43-768x768",
      "season": "winter"
    },
    {
      "imgUrl": "Images/diz-44-768x768.jpg",
      "name": "diz-44-768x768",
      "season": "autumn"
    },
    {
      "imgUrl": "Images/diz-46-768x768.jpg",
      "name": "diz-46-768x768",
      "season": "summer"
    },
    {
      "imgUrl": "Images/diz-47-768x768.jpg",
      "name": "diz-47-768x768",
      "season": "spring"
    },
    {
      "imgUrl": "Images/diz-52-768x768.jpg",
      "name": "diz-52-768x768",
      "season": "winter"
    },
    {
      "imgUrl": "Images/diz-54-768x768.jpg",
      "name": "diz-54-768x768",
      "season": "autumn"
    },
    {
      "imgUrl": "Images/diz-28-768x768.jpg",
      "name": "diz-28-768x768",
      "season": "winter"
    },
    {
      "imgUrl": "Images/diz-18-768x768.jpg",
      "name": "diz-18-768x768",
      "season": "summer"
    },
    {
      "imgUrl": "Images/diz-1-768x768.jpg",
      "name": "diz-1-768x768",
      "season": "spring"
    },
    {
      "imgUrl": "Images/diz-30-1-768x768.jpg",
      "name": "diz-30-1-768x768",
      "season": "autumn"
    },
    {
      "imgUrl": "Images/diz-34-768x768.jpg",
      "name": "diz-34-768x768",
      "season": "winter"
    },
    {
      "imgUrl": "Images/diz-36-768x768.jpg",
      "name": "diz-36-768x768",
      "season": "summer"
    },
    {
      "imgUrl": "Images/diz-7-768x768.jpg",
      "name": "diz-7-768x768",
      "season": "spring"
    },
    {
      "imgUrl": "Images/diz-4-768x768.jpg",
      "name": "diz-4-768x768",
      "season": "autumn"
    },
    {
      "imgUrl": "Images/diz-2-768x768.jpg",
      "name": "diz-2-768x768",
      "season": "autumn"
    },
    {
      "imgUrl": "Images/diz-7-768x768.jpg",
      "name": "diz-7-768x768",
      "season": "autumn"
    },
    {
      "imgUrl": "Images/diz-28-768x768.jpg",
      "name": "diz-28-768x768",
      "season": "winter"
    },
    {
      "imgUrl": "Images/diz-48-768x768.jpg",
      "name": "diz-48-768x768",
      "season": "winter"
    },
    {
      "imgUrl": "Images/diz-49-768x768.jpg",
      "name": "diz-49-768x768",
      "season": "spring"
    },
    {
      "imgUrl": "Images/diz-50-768x768.jpg",
      "name": "diz-50-768x768",
      "season": "summer"
    },
    {
      "imgUrl": "Images/diz-51-768x768.jpg",
      "name": "diz-51-768x768",
      "season": "spring"
    },
    {
        "imgUrl": "Images/diz-55-768x768.jpg",
        "name": "diz-55-768x768",
        "season": "summer"
      },
      {
        "imgUrl": "Images/diz-56-768x768.jpg",
        "name": "diz-56-768x768",
        "season": "winter"
      },
      {
        "imgUrl": "Images/diz-53-768x768.jpg",
        "name": "diz-53-768x768",
        "season": "summer"
      },
      {
        "imgUrl": "Images/diz-57-768x768.jpg",
        "name": "diz-57-768x768",
        "season": "spring"
      },
      {
        "imgUrl": "Images/diz-58-768x768.jpg",
        "name": "diz-58-768x768",
        "season": "autumn"
      },
      {
        "imgUrl": "Images/diz-59-768x768.jpg",
        "name": "diz-59-768x768",
        "season": "summer"
      },
      {
        "imgUrl": "Images/diz-60-768x768.jpg",
        "name": "diz-60-768x768",
        "season": "spring"
      },
      {
        "imgUrl": "Images/diz-62-768x768.jpg",
        "name": "diz-62-768x768",
        "season": "autumn"
      },
      {
        "imgUrl": "Images/diz-63-768x768.jpg",
        "name": "diz-63-768x768",
        "season": "spring"
      },
      {
        "imgUrl": "Images/diz-65-768x768.jpg",
        "name": "diz-65-768x768",
        "season": "winter"
      },
      {
        "imgUrl": "Images/diz-66-768x768.jpg",
        "name": "diz-66-768x768",
        "season": "spring"
      },
      {
        "imgUrl": "Images/diz-67-768x768.jpg",
        "name": "diz-67-768x768",
        "season": "autumn"
      },
      {
        "imgUrl": "Images/diz-68-768x768.jpg",
        "name": "diz-68-768x768",
        "season": "summer"
      },
      {
        "imgUrl": "Images/diz-73-768x768.jpg",
        "name": "diz-73-768x768",
        "season": "winter"
      },
      {
        "imgUrl": "Images/diz-72-768x768.jpg",
        "name": "diz-72-768x768",
        "season": "summer"
      },
      {
        "imgUrl": "Images/diz-71-768x768.jpg",
        "name": "diz-71-768x768",
        "season": "spring"
      },
      // {
      //   "imgUrl": "Images/diz-76-768x768.jpg",
      //   "name": "diz-76-768x768",
      //   "season": "autumn"
      // }
    ];
  return (
    <div className="app">
      <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path='/'element={<Home data={data}/>} />
      <Route path='/contact'element={<Contact/>} />
      <Route path='/collection'element={<Collection/>} />
      <Route path='/about'element={<About/>} />
    </Routes>
    <Footer/>
  </BrowserRouter>
    </div>
    
  )
}
