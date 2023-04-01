import React, { useRef, useState } from 'react'

const Component2 = () => {
    const ref_name = useRef(null)
    const [form, setForm] = useState({
        name:'홍길동',
        address: '인천 서구 경서동',
        phone: '010-0000-0000'
    })
    const {name, address, phone} = form;
    const onRegister = (e) => {
        e.preventDefault();
        if(window.confirm('주소를 등록하실래요?')){
            alert(`이름:${name}\n주소:${address}\n전화:${phone}`);
            setForm({
                name:'',
                address:'',
                phone:''
            })
            ref_name.current.focus();
        }
    }
    const onChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    return (
        <div>
            <h1>주소등록</h1>
            <form onSubmit={onRegister}>
                <input placeholder='이름입력' value={form.name} name='name' 
                onChange={onChange}/>
                <input placeholder='주소입력' value={form.address} name='address' onChange={onChange}/>
                <input placeholder='전화번로' value={form.phone} name='phone' onChange={onChange}/>
                <button>주소등록</button>
            </form>
            <hr/>
            <h1>이름:{form.name}</h1>
            <h1>주소:{form.address}</h1>
        </div>
    )
}

export default Component2