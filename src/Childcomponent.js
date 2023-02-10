import React, { useState } from 'react'
import './App.css'

const Childcomponent = () => {

    const [number , setNumber] = useState();

    function Handleclick(event){
        event.preventDefault();
        setNumber(event.target.value * event.target.value)
    }
  return (
    <div className="sty">
        <label>
        Find The Square
        <br/>
        <input id='input' onChange={Handleclick}></input>
        </label>
        <br/>
        <p id='output'>{number}</p>
    </div>
  )
}



export default Childcomponent