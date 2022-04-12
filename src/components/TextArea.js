//creating react based component
import React , {useState} from 'react'


// Hook = let you use state and other React features without writing a class.

// the State of a component is an object (instance of react class)
//  that holds some information that may change over the lifetime of the component.

//props = property , used in component in a form of arguments
export default function TextArea(props) {
    
    const toUpperCase =()=>{
      
        let newText = Text.toUpperCase();
        setText(newText)
        console.log(Text);
    }

    const toLowerCase =()=>{
    
        let newText = Text.toLowerCase();
        setText(newText)
        console.log(Text);
    }

    const clearCase =()=>{
       setText("")
    }

    const  removeSpace =()=>{
      //creating array,words sepearted by single or more than single space
      //this is by using regex
      let newText = Text.split(/[ ]+/);
      //join those words with single space
      setText(newText.join(" "));

    }
    const  captilizeCase =()=>{
      //this is by using regex
      var str = Text.toLowerCase().replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase());
      setText(str);
    }
    const  downloadCase =()=>{
       setText("")
    }


    const handleOnChange= (event)=>{
        console.log("handling onchange");
        setText(event.target.value)

    }

     // Declare a new state variable, which we'll call "text"
     //here Text to store and setText function which will update teh value in Text variable whenever needed
   const [Text, setText] = useState("Write here....");
    // Text = "wewerwerwe" = value cannot update like this
    // setText("hello") This is the way to update the value

   
     
  return (
    <>
       
    <div className="mb-3"> 
       {/* in orther to use variable in js */}
       {/* use {'${here add your variable}'} */}
      <h3 className={`heading text-${props.colorText}`}>{props.heading}</h3>
      <textarea  value={Text} className="form-control border border-1 border-dark"onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>

      <button className="btn btn-outline-success mx-2" onClick={toUpperCase}>Upper-Case</button>
      <button className="btn btn-outline-warning mx-2" onClick={toLowerCase}>Lower-Case</button>
      <button className="btn btn-outline-info mx-2" onClick={clearCase}>Clear-Screen</button>
      <button className="btn btn-outline-danger mx-2" onClick={removeSpace}>Remove-Space</button>
      <button className="btn btn-outline-secondary mx-2" onClick={captilizeCase}>Captilize-Case</button>
      <button className="btn btn-outline-primary mx-2" onClick={downloadCase}>Download-Text</button>
    </div>

    <div className={`container  my-5 info text-${props.colorText}`}>
       <p><i>No of Charactors: </i>{Text.length}</p>
       <p> <i>No of word: </i>{Text.split(' ').filter((Element)=>{return Element.length!==0}).length}</p>
       <p> <i>Reanding Time(min): </i>{0.004* (Text.split(' ').filter((Element)=>{return Element.length!==0}).length)} min</p>
    </div>
    </>
  )
}
