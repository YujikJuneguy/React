import React from 'react'
import Navbar from '../Navbar';
import Home from '../../Pages/Home';
import NotFound from '../../Pages/NotFound';
import { Route, Routes } from "react-router";

const WebRoutes = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/*" element ={<NotFound/>}/>
v     </Routes>
    </div>
  )
}

export default WebRoutes
