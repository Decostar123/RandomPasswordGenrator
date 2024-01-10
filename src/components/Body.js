import React , {useState} from 'react'
import Head from "./Head" 
import Tail from "./Tail"
import "../Body.css"
const Body = () => {
    const[ upper , setUpper ] = useState(false ) ;
    const[ lower , setLower ] = useState(false ) ;
    const[ number , setNumber ] = useState(false ) ;
    const[ symbol , setSymbol ] = useState(false ) ;
    const [msg, setMsg ] = useState("") ; 
    const [len , setLen ] = useState(0) ; 
  return (
    <div id="container">
        <Head setLen={setLen} msg={msg} len={len}/>
        <Tail setUpper={setUpper} setLower={setLower} 
        setNumber={setNumber}  setSymbol={setSymbol} 
        setMsg={setMsg} msg={msg}  upper={upper} 
          lower={lower} number={number} symbol={symbol}
          len={len}
        />
    </div>
  )
}

export default Body