import React from 'react'
import "../Head.css"
import handleCopyClick from './utils/handleCopyClick'
const Head = ({setLen , msg , len }) => {
  return (
    <div id="main">
        <div id="upper" >
            <p>{msg}</p>
            <button onClick={()=>{
              console.log("handleCopyClick" )
              handleCopyClick(msg) ; 
            }}>Copy</button>
        </div>
        <div id="lower">
            <p>Character Length</p>
            <p>{len}</p>
        </div>
        <input type="range" min="1" max="25" onChange={(e)=>setLen(e.target.value)}/>
    </div>
  )
}

export default Head