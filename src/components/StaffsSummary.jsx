import React, { useEffect, useState } from 'react'
import { staffDeleteApi, staffListApi,staffUpdateApi } from '../services/api'

function StaffsSummary({refreshRequired,setStaffId}) {

    const [staffs, setStaffs] = useState()

    
    async function handleStaffDelete(id){

        let res=await staffDeleteApi(id)

        if (res.status>199 && res.status<300){

            fetchStaffs()
        }
    }
    

    async function fetchStaffs() {

        let res = await staffListApi()

        

        if (res.status > 199 && res.status < 300) {

            setStaffs(res.data)

            // console.log(res.data);
        }

        else {

            console.log("failed to fetch data from resource");
        }

        console.log(res);
    }

    useEffect(() => {

        fetchStaffs()

    }, [refreshRequired])
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <table className='table table-primary table-hover'>
                            
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Place</th>
                                <th>Department</th>
                                <th>Salary</th>
                                <th>Image</th>
                                <th>Action</th>
                            </tr>
                            <tbody>
                                {staffs && staffs.map((s)=>(
                                    <tr>
                                        <td>{s.name}</td>
                                        <td>{s.age}</td>
                                        <td>{s.place}</td>
                                        <td>{s.department}</td>
                                        <td>{s.salary}</td>
                                        <td><img src={s.image} style={{width:"90%",height:"100px"}} alt="" /></td>
                                        <td>
                                            <button className='btn btn-outline-primary'
                                             onClick={()=>handleStaffDelete(s.id)}
                                             >Delete</button>
                                             <button className='btn btn-outline-warning'
                                             onClick={()=>setStaffId(s.id)}
                                             >Edit</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-2"></div>
                </div>

            </div>
        </div>
    )
}

export default StaffsSummary