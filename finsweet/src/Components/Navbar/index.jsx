import React from "react";
import styles from "./Navbar.module.css";
import Logo from "/Logo.png";
import { Link, NavLink } from "react-router-dom";
import { NavbarLinks } from "../../MockData";
import Atropos from "atropos/react";
import classNames from "classnames";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.n}`}>
        <Link>
          <img src={Logo} alt="Logo" />
        </Link>
        <div className="d-flex">
          {NavbarLinks.map(({ id, title, to }) => {
            return (
              <NavLink
                key={id}
                className={({ isActive }) =>
                  classNames({
                    [styles.link]: true,
                    [styles.active]: isActive,
                  })
                }
                to={to}
              >
                {title}
              </NavLink>
            );
          })}
          <Atropos className={styles.contact} highlight={false} shadow={false}>
            <Link to="/">Contact Us</Link>
          </Atropos>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
