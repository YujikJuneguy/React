import React from 'react';
import Banner from '../../Components/Banner';
import { Link } from "react-router-dom";


const Home = () => {
  return (
   <Banner 
   title ="Building stellar websites for early startups"
   description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
   eiusmod tempor incididunt."z
   image="/Illustration.svg"
   button={<Link className="button" to="/">
   View our work
   </Link>}
   viewPricing
   />
  ) 
}

export default Home;