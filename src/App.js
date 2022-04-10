//in js  class = className , / , for = htmlFor ( basicaly use camelcase in javscript using html)
//jsx allow us to use html in react
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextArea from './components/TextArea';
import React, {useState} from 'react'
import Contact from './components/Contact';

//importing router
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";


function App() {
  const changeMode = ()=>{
    if(Mode === false){
      document.body.style.backgroundColor = "#38444c";
      setMode(true);
      setbtnStatus("Disable")
      settextColor("white")
    }
    else if(Mode === true){
      document.body.style.backgroundColor = "white";
      setMode(false);
      setbtnStatus("Enable")
      settextColor("black")
    }     
    console.log("Mode changed");  
  }
  //multiple stated
  const [Mode, setMode] = useState(false)
  const [btnStatus, setbtnStatus] = useState("Enable")
  const [textColor, settextColor] = useState('black')
  

  return (
    //this is jsx fragment to append more than one html component
    <>  
    {/* This is the way to set router , first npm install react-router-dom"  */}
    {/* import all needed files */}
    {/* set the path */}
    {/* in Navbar  */}
    <Router>

    <Navbar nav_search="contact us"/>
    <div className="form-check form-switch switch">
       <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={changeMode}/>
       {/* if we have to use variable inside class use {curly braces} than `backtics`  and ${} */}
       <label className={`form-check-label text-${textColor}`} htmlFor="flexSwitchCheckDefault">{btnStatus} Dark mode</label>
    </div>    

    {/* creating class = container (class of bootstrap) */}
    <div className="container">
            
        <Routes>
          <Route  path="/" element={ <TextArea heading= "Write The Text Below!" colorText={textColor}/> }/>
          <Route  path="/About" element={<About/>}/>
          <Route  path="/Contact" element={<Contact/>}/>
       </Routes>     
 

    </div>
    </Router>
    </> 
  );
}

export default App;
