import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
    <nav>
            <div className="container">
                <div className="box">
                    <div className="logo">
                      <img src="pic/Logo.png" alt=""/>
                    </div>
                    <div className="nav-item">
                      <ul>
                        <li>Home <i className="fa-solid fa-angle-down"></i></li>
                        <li>About <i className="fa-solid fa-angle-down"></i></li>
                        <li>Service <i className="fa-solid fa-angle-down"></i></li>
                        <li>Portfolio <i className="fa-solid fa-angle-down"></i></li>
                        <li>Price <i className="fa-solid fa-angle-down"></i></li>
                        <li>Blog <i className="fa-solid fa-angle-down"></i></li>
                      </ul>
                    </div>
                    <div className="button">
                      <a href="#">Contact Us</a>
                    </div>
                </div>
            </div>
        </nav>
  )
}

export default Navbar
