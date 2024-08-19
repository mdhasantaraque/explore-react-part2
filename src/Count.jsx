import { useState } from "react";

export default function Count(){

    const[count, setCount]=useState(0)
    
    const handleCount=()=>{
      const newCount = count + 1
       setCount(newCount)
    }
    const handleDeduct=()=>{
      
        setCount(count-1)
    }

    return(<>

    <div style={{border: '2px solid tomato', color: 'yellow', borderRadius:'5px', padding: '20px' }}>
        <h1>Counter: {count}</h1>
        <button onClick={handleCount}>Add</button>
        <button onClick={handleDeduct}>Deduct</button>
    </div>
        
    </>)


}