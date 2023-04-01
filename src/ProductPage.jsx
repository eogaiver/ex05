import React, { useState } from 'react'
import Product from './Product'
import RegisterPage from './RegisterPage'

const ProductPage = () => {
    const [productss, setProducts] = useState(
        {code:1, name:'냉장고', price:1200000},
        {code:2, name:'냉장고2', price:1200000},
        {code:3, name:'냉장고3', price:1200000},
        {code:4, name:'냉장고4', price:1200000},
        {code:5, name:'냉장고5', price:1200000},
        {code:6, name:'냉장고6', price:1200000},
    )
    return (
        <div>
            <RegisterPage/>
            <h1>상품관리</h1>
            <table>
                <thead>
                    <tr>
                        <td>상품코드</td>
                        <td>상품이름</td>
                        <td>상품가격</td>
                        <td>삭제</td>
                    </tr>
                </thead>
                <tbody>

                    {/* {productss.map(p =>
                        <Product key={p.code} p={p} pro={productss} 
                        setPro={setProducts}/>
                    )} */}

                </tbody>
            </table>
        </div>
    )
}

export default ProductPage