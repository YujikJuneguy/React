import React from 'react'
import Banner from '../../Components/Banner'
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div>
         <Banner 
   title ="All the features you need"
   description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
   image="/FeatureHeroIllustration.svg"
   button={<Link className="button" to="/">
   View Pricing
 </Link>}
   />
    </div>
  )
}

export default Features