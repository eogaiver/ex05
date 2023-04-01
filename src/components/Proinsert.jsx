import React, {useRef, useState } from 'react'
import {Form, Card, Button} from 'react-bootstrap'

const Proinsert = ({setProducts, products}) => {
    const next=useRef(4)
    const [form, setForm] = useState({
        code :next.current + 1,
        code:5, 
        name:'삼성냉장고',
        price: 3200000
    });
    const {code, name, price} = form;
    const onChangeForm = (e)=>setForm({
        ...form,
        [e.target.name]:e.target.value
    })

    const onRegister = (e) => {
        e.preventDefault();
        if(window.confirm(`${name}상품을 등록하실래요?`)){
            console.log(form);
            const newProducts = products.concat(form);
            setProducts(newProducts);
            next.current++;
            setForm({
                code: next.current,
                name:'',
                price:''
            })
        }
    }
    return (
        <Card className='text-center'>
            <Card.Title>
                <h3>상품등록</h3>
            </Card.Title>
            <Card.Body>
                <Form className='text-center' onSubmit='onRegister'>
                    <Form.Control 
                        onChange={onChangeForm}
                        value={code} name='code'
                        className='my-2' placeholder='상품코드'/>
                    <Form.Control 
                        onChange={onChangeForm}
                        value={name} name='name'
                        placeholder='상품이름'/>
                    <Form.Control 
                        onChange={onChangeForm}
                        value={price} name='price'
                        placeholder='상품가격'/>
                    <Button type='submit'>상품등록</Button>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default Proinsert