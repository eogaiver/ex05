import React, { useState } from 'react'
import {Row, Col, Table, Button} from 'react-bootstrap'
import Proinsert from './Proinsert';

const Prodeucts = () => {
    const [products, setProducts] = useState([
        {code:1, name:'LG냉장고', price:2500000},
        {code:2, name:'LG냉장고2', price:2500000},
        {code:3, name:'LG냉장고3', price:2500000},
        {code:4, name:'LG냉장고4', price:2500000},
    ]);

    const onDelete = (code) => {
        if (window.confirm(`${code}번 학생을 삭제하실래요?`)){
            const newStudents = products.filter(stu=>stu.code !== code);
            setProducts(newStudents);
        }
    }

    return (
        <div>
            <h1>상품관리</h1>
            <Row className='justify-content-center my-5'>
                <Col md={8} className='px-5'>
                    <Proinsert setProducts={setProducts} products={products}/>
                    <Table striped bordered hover >
                        <thead>
                            <tr>
                                <td>상품코드</td>
                                <td>상품이름</td>
                                <td>상품가격</td>
                                <td>삭제</td>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(p=>
                                <tr key={p.code}>
                                    <td>{p.code}</td>
                                    <td>{p.name}</td>
                                    <td>{p.price}</td>
                                    <td><Button onClick={()=>onDelete(p.code)} variant='danger'>
                                        삭제                                    
                                    </Button></td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </div>
    )
}

export default Prodeucts