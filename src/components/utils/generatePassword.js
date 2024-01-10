const generatePassword = (upper, lower, number, symbol ,len )=>{
    let msg = "" ;
    
    if(upper) msg += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
    if( lower) msg += "abcdefghijklmnopqrstuvwxyz" 
    if( number ) msg += "0123456789" ;
    if( symbol) msg += "!@#$%^&*()" ; 
    
    let password = "" ;
    let n = msg.length ;  
    for( let  i = 1 ;i <= len ; i++){
        let ind = Math.floor(Math.random()*n )  ; 
        let ch = msg[ind] ;
        password += ch ;
    }
    return password ; 
    

}

export default generatePassword ;