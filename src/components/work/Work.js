import React from 'react'
import "./work.css"

const Work = () => {
  return (
    <section className="work">
        <div className="container">
        <div className="corner">
            <img src="pic/corner.png" alt=""/>
        </div>
        <div className="box">
            <div className="text">
            <div className="title">
                <h4>digital experience</h4>
                <h2>The hundred of completed works still counting</h2>
            </div>
            </div>
            <div className="button">
            <a href="#">View All</a>
            </div>
        </div>
        <div className="box">
            <div className="small-item">
            <img src="pic/work1.png" alt=""/>
            <div className="text-box">
                <h4>Mobile App</h4>
                <a href="#">Read More</a>
            </div>
            </div>
            <div className="large-item">
            <img src="pic/work1.png" alt=""/>
            <div className="text-box">
                <h4>eCommerce Solution</h4>
                <a href="#">Read More</a>
            </div>
            </div>
        </div>
    
        <div className="box">
            <div className="large-item">
            <img src="pic/work1.png" alt=""/>
            <div className="text-box">
                <h4>eCommerce Solution</h4>
                <a href="#">Read More</a>
            </div>
            </div>
            <div className="small-item">
            <img src="pic/work1.png" alt=""/>
            <div className="text-box">
                <h4>Mobile App</h4>
                <a href="#">Read More</a>
            </div>
            </div>  
        </div>
        </div>
  </section>
  
  )
}

export default Work