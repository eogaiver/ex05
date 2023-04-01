import React, { useState } from 'react'

const Component3 = () => {
    const [addresses, setAddresses] = useState([
        {id:1, name:'홍길동', address:'인천서구경서동'},
        {id:2, name:'강감찬', address:'서울시'},
        {id:3, name:'이순신', address:'경기도'},
    ])
    return (
        <div>
            <h1>주소목록(12214043)</h1>
            <table>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>이름</td>
                        <td>주소</td>
                    </tr>
                </thead>
                <tbody>
                    {addresses.map((add)=>
                        <tr>
                            <td>{add.id}</td>
                            <td>{add.name}</td>
                            <td>{add.address}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            {addresses.map((add)=>
                <div>
                </div>
            )}
        </div>
    )
}

export default Component3