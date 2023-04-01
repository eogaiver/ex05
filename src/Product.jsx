import React from 'react'

const Product = ({p, pro, setPro}) => {
    const {code, name, price} = p;
    const onDelete = (code)=>{
        if(window.confirm(`${code}번 상품을 삭제하실래요?`)){
            setPro(pro.filter(p=>p.code !== code))
        }
    }
    return (
        <tr>
            <td>{code}</td>
            <td>{name}</td>
            <td>{price}</td>
            <td><button onClick={()=>onDelete(code)}>삭제</button></td>
        </tr>
    )
}

export default Product