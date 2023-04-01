import React, { useState } from 'react'
import {Row, Col, Table, Button} from 'react-bootstrap'
import Student from './Student'

const Students = () => {
    const [Students, setStudents] = useState([
        {no:1, name:'홍길동', dept:'컴정과'}, 
        {no:2, name:'홍길동2', dept:'컴정과2'},
        {no:3, name:'홍길동3', dept:'컴정과3'},
        {no:4, name:'홍길동4', dept:'컴정과4'},
        {no:5, name:'홍길동5', dept:'컴정과5'},
        {no:6, name:'홍길동6', dept:'컴정과6'},
    ])

    const onDelete = (no) => {
        if (window.confirm(`${no}번 학생을 삭제하실래요?`)){
            const newStudents = Students.filter(stu=>stu.no !== no);
            setStudents(newStudents);
        }
    }

    return (
        <div>
            <h1>학생관리</h1>
            <Row className='justify-content-center my-5'>
                <Col md={8} >
                    <Table striped bordered hover>
                        <thead className='text-center'>
                            <tr>
                                <td>학번</td>
                                <td>이름</td>
                                <td>학과</td>
                                <td>삭제</td>
                            </tr>
                        </thead>
                        <tbody>
                            {Students.map(s=>
                                <tr key={s.no}>
                                    <td>{s.no}</td>
                                    <td>{s.name}</td>
                                    <td>{s.dept}</td>
                                    <td><Button onClick={()=>onDelete(s.no)} variant='danger'>
                                        삭제                                    
                                    </Button></td>
                                </tr>
                            )}
                            {/* {Students.map(s=>
                                <Student Student={s} onDelete={onDelete}/>
                            )} */}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </div>
    )
}

export default Students

// {Students.map(s=>
//     <div key={s.no}>
//         <h1>{s.no} {s.name} {s.dept}</h1>
//     </div>                
// )}