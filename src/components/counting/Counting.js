import React from 'react'
import "./counting.css"

const Counting = () => {
  return (
    <section className="counting" style = {{background : "url(pic/counting.png)" , backgroundPosition:"right"}}>
        <div className="container">
            <div className="box">
            <div className="count">
                <div className="item">
                <h3>19+</h3>
                <p>Total top service</p>
                </div>
                <div className="item">
                <h3>27+</h3>
                <p>Total top service</p>
                </div>
                <div className="item">
                <h3>98%</h3>
                <p>Total top service</p>
                </div>
                <div className="item">
                <h3>1,458</h3>
                <p>Usual Users</p>
                </div>
                
            </div>
            <div className="details">
                <div className="title">
                <h2>The hundred of completed works still counting</h2>
                </div>
                <p>Through strategy, design, and planning we build brand identities that connect with
                your Nesi. We then fine-tune a marketing plan that allows us to laser focus and target 
                your audience through the right channels.</p>
                <div className="button">
                    <a href="#">More about us</a>
                </div>
            </div>
            </div>
        </div>
</section>
  )
}

export default Counting