
import React, { useState } from 'react'

export default function TextFrame(props) {
  const handleUpcase = () => {
    let entered = text.toUpperCase();
    settext(entered);
    props.showAlert("Converted to Upper Case!!","success");
  }
  const handleonChange = (event) => {
    settext(event.target.value);
  }

  const handlelowercase = () => {
    console.log("clicked lower case")
    let newtext = text.toLowerCase();
    settext(newtext);
    props.showAlert("Converted to Lower Case!!","success");
  }
  const handleclearcase = () => {
    let newtext = "";
    settext(newtext);
    props.showAlert("Cleared the text box!!","success");
  }

  
  const [text, settext] = useState('Enter your text');

  return (

    <div className="mb-3" style={props.addedstyle}>
      <h1>{props.heading1}</h1>
      <div className="mb-3" style={props.addedstyle} >
        <textarea className="form-control" value={text} onChange={handleonChange}  style={props.addedstyle} id="mybox" rows="8"></textarea>
      </div>
      <button className={`btn btn-${props.btnclr} mx-2`} onClick={handleUpcase} >Uppercase</button>
      <button className={`btn btn-${props.btnclr} mx-2`} onClick={handlelowercase} >Lowercase</button>
      <button className={`btn btn-${props.btnclr} mx-2`} onClick={handleUpcase} >Capitalize</button>
      <button className={`btn btn-${props.btnclr} mx-2`} onClick={handleclearcase} >Clear Text</button>

     <div className="container my-4" >
     <h3>Text Summery</h3>
      <p>{text.split(" ").length} words and {text.length} Charecters</p>
      <p> {0.008*text.split(" ").length} time takes to read this content</p>
      <h3>Preview</h3>
      <p>{text}</p>


     </div>
      

    </div>

  )
}
