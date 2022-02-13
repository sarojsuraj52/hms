import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Record.css'

export default function Record() {


    const [datas, setdatas] = useState([{
        department: '',
        name: '',
        gender: '',
        phone: '',
        email: '',
        date: ''

    }])

    useEffect(() => {
        fetch('/datas').then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => setdatas(jsonRes))
    })

    function deleteData(id){
        let confirmation = window.confirm('Are you sure ?')
        if(confirmation === true){
        axios.delete('/delete/' + id);
        alert('Data deleted successfully')
        }
        else 
        {
            alert('You have cancelled the process');
        }
        
    }



    return <div>
        <h1 className='Heading mt-2'>Patient Data</h1>
        <div className='adjust'>
        <table className='table table-striped mb-5' >
            <thead>
                <tr>
                    <th>Department</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Date</th>
                    <th>Action</th>

                </tr>
            </thead>
            <tbody>

                {datas.map(data => {
                    return (

                        <tr>
                            <td>{data.department}</td>
                            <td>{data.name}</td>
                            <td>{data.gender}</td>
                            <td>{data.phone}</td>
                            <td>{data.email}</td>
                            <td>{data.date}</td>
                           <td className='btn-box'>
                               
                            <button className='btn btn-sm red ' onClick={() =>  deleteData(data._id)}><i class="fas fa-trash-alt"></i> Delete</button>
                            {/* <p>delete</p> */}
                           </td>
                        </tr>

                    )
                })}

            </tbody>
        </table>
        </div>
    </div>;
}
