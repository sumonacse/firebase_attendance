import React from 'react'
import "./banner.css"
import Button from "../reusable/button/Button"

const Banner = () => {
  return (
    <section className="banner" style={{background : "url(pic/banner-bg.png)"}}>
        <div className="round-shape">
            <div className="inner-shape"></div>
        </div>
        <div className="dot"></div>
        <i className="fa-solid fa-xmark cross"></i>
        <i className="fa-solid fa-xmark cross2"></i>
            <div className="container">
                    <h1>We are a full range design agency</h1>
                    <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime.</p>
                    <div className="button">
                        <Button title="Contact US" />
                        <Button title="Showcase" />
                    </div>
            </div>
</section>
  )
}

export default Banner