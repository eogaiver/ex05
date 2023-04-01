import React, { useState } from 'react'

// const Component1 = (name, age, shcool) => {
const Component1 = (props) => {
    const [count, setCount] = useState(1000)
    let number = 1000;

    const setNumber=()=>{
        number = number + 100;
        console.log('number=', number);
    }
    return (
        <div >
            <h1>{count}</h1>
            <hr/>
            <div style={{textAlign:'center', background:'pink'}}>
                <button onClick={()=>setCount(count-100)}>감소</button>
                <button onClick={()=>setCount(count+100)}>증가</button>
            </div>
            <h1>{number}</h1>
            <button onClick={()=>setNumber()}>Number증가</button>
        </div>
    
    )
}

export default Component1

{/* <div className='com1'>
<h1>이름:{name}</h1>
<h1>나이:{age}</h1>
<h1>학교:{shcool}</h1>
<h1>{name}|{age}|{shcool}</h1>
</div> */}