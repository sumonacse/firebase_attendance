import React from 'react'
import "./customer.css"

const Customer = () => {
  return (
    <section className="customer" style = {{background : "url(pic/customer.png)"}}>
        <div className="container">
        <div className="box">
            <div className="details">
                <div className="title">
                    <h2>Our customer say</h2>
                </div>
                <div className="imgbox">
                    <img src="pic/customer2.png" alt=""/>
                    <img src="pic/customer2.png" alt=""/>
                    <img src="pic/customer2.png" alt=""/>
                    <img src="pic/customer2.png" alt=""/>
                </div>
                <p>As a leading digital platform in Paris, we look to engage with our clients beyond the conventional
                    design and development agency relationship, becoming a partner to the people and companies we work with.</p>
                <h3>Jonathon</h3>
            </div>
            <div className="img">
                <img src="pic/customer1.png" alt=""/>
            </div>
        </div>
        </div>
  </section>
  )
}

export default Customer