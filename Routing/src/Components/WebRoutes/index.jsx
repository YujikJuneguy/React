import '../../style.css';
import React from 'react';
import Navbar from "../navbar";
import NotFound from '../NotFound';
import Home from '../../Pages/Home';
import About from '../../Pages/About';
import Users from '../../Pages/Users';
import Contact from '../../Pages/Contact';
import { Route,Routes } from "react-router";

const WebRoutes = () => {
  return (
    <div>
            <Navbar/>

<Routes>
  <Route path ='/' element={<Home />}/>
  <Route path ='/about' element={<About />}/>
  <Route path ='/contact' element={<Contact />}/>
  <Route path ='/users' element={<Users />}/>
  <Route path ='/' element={<NotFound />}/>
</Routes>
    </div>
  )
}

export default WebRoutes
  