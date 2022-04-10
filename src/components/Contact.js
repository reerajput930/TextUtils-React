import React from 'react'
import pic from "./RiyaImg.jpg"

export default function Contact() {
  return (
    <div className='container my-5'>
        <div className="card" >
        <img src={pic} className="card-img-top card-img" alt="/"/>
        <div className="card-body">
            <div className='card-body-inner'>

        <h2 className="card-title my-3">Hello It's me , Riya!</h2>
        <p className="card-text my-0">A Girl whose Sky's the Limit.</p>
        <p className="card-text">Let's connect and share knowledge, below are my active Social Handles.</p>
        <a href="https://github.com/reerajput930" target="_blank" rel="noreferrer" className="btn btn-outline-dark">Github</a>
        <a href="https://www.linkedin.com/in/riya-rajput-23400a200/" target="_blank" rel="noreferrer" className="btn btn-outline-primary">Linkedin</a>
        <a href="https://www.instagram.com/rajputriya930/" target="_blank" rel="noreferrer" className="btn btn-outline-warning">Instagram</a>
            </div>
        </div>
        </div>
    </div>
  )
}
