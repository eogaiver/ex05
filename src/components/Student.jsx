import React from 'react'

const Student = ({ Student, onDelete }) => {
    const {no, name, dept} = Student;
    return (
        <tr>
            <td>{no}</td>
            <td>{name}</td>
            <td>{dept}</td>
            <td><button onClick={()=>onDelete(no)}>삭제</button></td>
        </tr>
    )
}

export default Student