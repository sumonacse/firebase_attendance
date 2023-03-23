import React from 'react'
import Serviceitem from "../reusable/serviceitem/Serviceitem"
import "./service.css";


const Service = () => {
  return (
    <section className="service">
        <div className="container">
            <div className="box">
                <Serviceitem title="Grow your business"  img="pic/service1.png" />
                <Serviceitem title="Digital marketing"  img="pic/service2.png" />
                <Serviceitem title="Search engine optimization" img="pic/service3.png"  />
            </div>
        </div>
</section>
  )
}

export default Service