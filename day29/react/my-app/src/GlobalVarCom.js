import React from 'react'
let count=0
const GlobalVarCom = () => {
     const increament=()=>{
         count+=1;
         console.log(count);
     }
     const decreament=()=>{
         count-=1;
            console.log(count);
     }
   return (
     <div>
        using global variable
         <br />
       <button onClick={increament}>increament</button>
         <span>{count}</span>
         <button onClick={decreament}>decreament</button>
     </div>
   )
}

export default GlobalVarCom
