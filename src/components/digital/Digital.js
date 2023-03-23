import React from 'react'
import Button from '../reusable/button/Button'
import "./digital.css"
const Digital = () => {
  return (
    <section className="digital">
        <div className="container">
            <div className="title">
            <h4>digital experience</h4>
            <h2>Connect people in digital life</h2>
            </div>
        </div>
        <div className="box">
            <div className="left">
            <img src="pic/digital.png" alt=""/>
            <div className="round-shape">
                <div className="inner-shape"></div>
            </div>
            </div>
            <div className="right" style={{background : "url(pic/digital2.png)" ,backgroundPosition:"right"}}>
            <i className="fa-solid fa-xmark cross"></i>
            <h3>More than just an ad agency, we harness the tools of traditional and digital.</h3>
            <p>With over 25 years of experience, we have crafted thousands of strategic discovery process that enables us to peel
                back the layers which enable us to understand, connect, represent and dominate your market.</p>
                <div className="button">
                     <Button title="More About Us"/>
                </div>
            </div>
        </div>
</section>
  )
}

export default Digital