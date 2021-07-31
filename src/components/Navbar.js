import React from "react";
import { FaBars } from 'react-icons/fa';
import { Link } from "react-router-dom";
import logo from "../components/mylogo.png";


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">

      <div className="container">
      <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..." /></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <FaBars />
  
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
  
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home</a>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/about" target="_blank">About me</Link>
   </li>
   <li className="nav-item active">
        <a className="nav-link" href="#">Services</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">Works</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">Portfolio</a>
      </li>

    </ul>
  </div>
  </div>
</nav>


    )
}

export default Navbar;