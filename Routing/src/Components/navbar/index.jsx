import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const links = [
        { path: '/', title: 'Home' },
        { path: '/about', title: 'About' },
        { path: '/contact', title: 'Contact' },
    ];

  return (
    <nav>
        {links.map(({ path, title}) => (
            <NavLink key ={path} className ="" to={path}>
                {title}
                </NavLink>
            ))}   
    </nav>
  );
}

export default Navbar;




    