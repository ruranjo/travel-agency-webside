import './App.css'
import React from 'react'
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Service from "./components/Service"
import Destination from "./components/Destination"
import Offers from "./components/Offers"
import Tour from "./components/Tour"



function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Service/>
      <Destination/>
      <Offers/>
      <Tour/>
    </>
  )
}

export default App
