import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(1000)
    return(
        <>
            <h1>{count}</h1>
            <hr />
            <div style={{textAlign:'center', padding:'20px'}}>
                <button onClick={()=>setCount(count-100)}>감소</button>
                <button onClick={()=>setCount(count+100)}>증가</button>
            </div>
        </>
    );
}