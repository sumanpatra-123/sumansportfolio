import React from "react";
import { FaBars } from 'react-icons/fa';
import { Link } from "react-router-dom";
import logo from "../components/mylogo.png";


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">

      <div className="container">
      <a className="navbar-brand" href="#!"><img className="logo" src={logo} alt="logo..." /></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <FaBars />
  
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">  
  
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/home">Home</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/about">About me</Link>
   </li>
   <li className="nav-item active">
        <Link className="nav-link" to="/service">Services</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/work">Works</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/portfolio">Portfolio</Link>
      </li>

    </ul>
  </div>
  </div>
</nav>


    )
}

export default Navbar;