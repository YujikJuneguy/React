import React from 'react'
import Navbar from '../Navbar';
import Home from '../../Pages/Home';
import NotFound from '../../Pages/NotFound';
import { Route, Routes } from "react-router";
import Features from '../../Pages/Features';
import AboutUs from '../../Pages/AboutUS';

const WebRoutes = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/about" element ={<AboutUs/>}/>
        <Route path="/features" element ={<Features/>}/>
       
       


v     </Routes>
    </div>
  )
}

export default WebRoutes
