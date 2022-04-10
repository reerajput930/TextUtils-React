//we need react based component
//sortform rfc(for loading script)
import React from 'react'
import {
  NavLink
} from "react-router-dom";


// In React, all the code we write is defined inside a component.

//Props are arguments passed into React components. 
// props stands for properties.


// State allows us to manage changing data in an application. 
// It's defined as an object where we define key-value pairs specifying various data we want to track in the application.

export default function Navbar(props) {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">Yr-TextUtils</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/About">About us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/Contact">Contact us</NavLink>
        </li>
       </ul>
      <form className="d-flex">
        <input className="form-control me-2 w-75 h-25 my-3" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success  h-25" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    
    </>
  )
}
