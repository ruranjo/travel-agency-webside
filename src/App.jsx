import './App.css'
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Service from "./components/Service"
import Destination from "./components/Destination"
import Offers from "./components/Offers"
import React from 'react'


function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Service/>
      <Destination/>
      <Offers/>
    </>
  )
}

export default App
