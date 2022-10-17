import { AppBar } from '@mui/material';

import logoWithe from '../../assets/img/logowithe.png'
import './navbar.css'
import { useState, React } from 'react';





function Navbar() {

    const [navbarScroll, setNavbarScroll] = useState(false);


const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbarScroll(true);
    } else {
      setNavbarScroll(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <AppBar sx={
        navbarScroll
          ? {
              backgroundColor: "#000",
              transition: "0.3s",
              width: "100%",
            }
          : {
              backgroundColor: "#000"
                ? "transparent"
                :'#000' ,
              boxShadow: 0,
              transition: "0.3s",
              width: "100%",
            }
      } className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav">
   
    <div className="container px-5">
        <a className="navbar-brand fw-bold" href="#page-top"><img className='logonav' src={logoWithe} alt=""/></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="bi-list"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul  className=" navbar-nav ms-auto me-4 my-3 my-lg-0">
                <li  className="nav-item"><a class="nav-link me-lg-3" href="#features">Our Service</a></li>
                <li  className="nav-item"><a class="nav-link me-lg-3" href="#download">About Us</a></li>
            </ul>
           
        </div>
    </div>

</AppBar>
  )
}

export default Navbar