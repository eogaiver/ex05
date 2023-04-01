import React, { useRef, useState } from 'react'

const RegisterPage = ({pro, setPro}) => {
    const next_code = useRef(7);
    const [form, setForm] = useState({
        name : '엘지tv',
        price: 25000000
    });
    const {name, price} = form;
    const onRegister = (e) => {
        e.preventDefault();
        if(window.confirm('새로운 상품을 등록라실래요?')){
            //상품등록
            console.log(form)
            setPro(pro.concat({...form, code:next_code.current}))
            // setForm({
            //     name:'',
            //     price:''
            // });
            next_code.current=next_code.current+1;
        }
    }
    const onChange = (e) =>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    return (
        <div>
            <h1>상품등록</h1>
            <form onSubmit={onRegister}>
                <input 
                    name='name' onChange={onChange}
                    placeholder='상품이름' value={name}/>
                <input 
                    name='price' onChange={onChange}
                    placeholder='상품가격' value={price}/>
                <button>상품등록</button>
                <button>삭제</button>
            </form>
        </div>
    )
}

export default RegisterPage