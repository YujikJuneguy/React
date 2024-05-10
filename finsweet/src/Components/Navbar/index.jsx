
import React from 'react';
import styles from './Navbar.module.css';
import Logo from '/Logo.png'
import {Link, NavLink} from 'react-router-dom'
import { NavbarLinks } from "../../MockData";
import Atropos from 'atropos/react'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
      <Link>
        <img src={Logo} alt="Logo" />
      </Link>
      </div>    
      <div >
       {
        NavbarLinks.map (({id,title,to})=> {
          return <NavLink className={styles.links} key={id} to={to}>{title}</NavLink>
         })
       }
       <Atropos className={styles.contact} highlight={false}shadow={false}>
         <Link to="/">
          Contact Us</Link>     
       </Atropos>
       </div>
    </nav>
  );
}

export default Navbar;
