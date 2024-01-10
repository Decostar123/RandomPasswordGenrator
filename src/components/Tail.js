import React , {useEffect} from 'react'
import "../Tail.css"
import generatePassword from './utils/generatePassword'

const Tail = ({setUpper,setLower,setNumber , setSymbol ,
   msg , setMsg , upper, lower, number, symbol , len }) => {
  
    function getPassword(){
      let msg = generatePassword( upper, lower, number, symbol , len ) ; 

      setMsg( msg) ; 
      // alert( msg ) ; 
      console.log( msg ); 
    }
    return (
    <div id="box">
      <div className="inner">
      <input type="checkbox"  
        onChange={(e)=>{
         
          setUpper(e.target.checked )
        }}
      />  <label>Include Uppercase Letters </label>
      </div>
      <div className="inner">
      <input type="checkbox" 
       onChange={(e)=>{
         
         setLower(e.target.checked )
       }}
        />  <label>Include Lowercase Letters </label>
      </div>
      <div className="inner">
      <input type="checkbox" 
       onChange={(e)=>{
         
         setNumber(e.target.checked )
       }}

       />  <label>Include Numbers </label>
      </div>
      <div className="inner">
      <input type="checkbox" 
      
      onChange={(e)=>{
         
         setSymbol(e.target.checked )
       }} />  <label>Include Symbols  </label>
      </div>
      <div className="strength">
        <label>Strength</label>
        <label>{msg.length <=5 ? "Easy" :  msg.length <=10? "Meadium":"Hard"}</label>
      </div>
      <div style={{display:"flex" , justifyContent:"center"}}>
      <button class="generate" onClick={()=>getPassword()}>
        GENERATE PASSWORD 
      </button>
      </div>
        
       
      
    </div>
  )
}

export default Tail