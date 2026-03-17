
import React, { useState } from 'react'
function Counter(){
   const [count,setCount] = useState(0)
   
       const inc=()=> {
           setCount(count+1)
       }
   
       const desc=()=> {
           setCount(count-1)
       }
   
   
       return (
           <div>
            <h1>{count}</h1>
               <button onClick={inc}>Increment</button>
               <button onClick={desc}>Decrement</button>
           </div>
       )
        


    
}
export default Counter;