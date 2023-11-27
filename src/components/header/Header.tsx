// import React from "react";
import "./header.css"

export default function Header() {
  return (
    <>
   

{/* {navbar} */}

<div className="main flex justify-center items-center bg-orange-400 ">
<nav className="nav z-20 backdrop-blur-lg mx-auto ">
  <a href="#" className="  hover:font-font7 nav__link">
    <i className="material-icons nav__icon " >dashboard</i>
    <span className="nav__text ">Dashboard</span>
  </a>
  <a href="#" className="  hover:font-font7 nav__link nav__link--active ">
    <i className="material-icons nav__icon">person</i>
    <span className="nav__text">Profile</span>
  </a>
  <a href="#" className="  hover:font-font7 nav__link">
    <i className="material-icons nav__icon">devices</i>
    <span className="nav__text">Devices</span>
  </a>
  <a href="#" className="  hover:font-font7 nav__link">
    <i className="material-icons nav__icon">lock</i>
    <span className="nav__text">Privacy</span>
  </a>
  <a href="#" className="  hover:font-font7 nav__link">
    <i className="material-icons nav__icon">settings</i>
    <span className="nav__text"  >Settings</span>
  </a>
</nav>
</div>
{/* {navbar} */}


    </>
  );
}
