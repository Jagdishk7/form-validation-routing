import React, { useState , useEffect } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h1>Form Validation + Routing</h1>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/" onClick={() => setShowMediaIcons(false)}>Home</NavLink>
            </li>
 
            <li>
              <NavLink to="/about" onClick={() => setShowMediaIcons(false)}>About</NavLink>
            </li>
          
            <li>
              <NavLink to="/service" onClick={() => setShowMediaIcons(false)}>Service</NavLink>
            </li>
          </ul>
        </div>


        {/* 3rd social media links */}
        
          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <div className="center" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </div>
          </div>
      
      </nav>
    </>
  );
};

export default Navbar;