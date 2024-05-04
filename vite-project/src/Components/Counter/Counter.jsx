import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(0)
    
  
    const plus =() => setCount(count + 1);
    const minus =() => setCount(count - 1);
 return (
    <div>
        <h1>{count}</h1> 
        <button onClick ={minus}>azalt</button>
        <button onClick={plus}>artir</button>
    </div>
  );
};

export default Counter;
   