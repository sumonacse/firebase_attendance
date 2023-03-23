import React from 'react'
import "./serviceitem.css"


const Service = ({title,img}) => {
  return (
    <div className="item">
        <img src={img} alt=""/>
        <h3>{title}</h3>
        <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque </p>
    </div>
  )
}

export default Service