import React, { useEffect, useState } from 'react'
import { staffCreateApi, staffDetailApi ,staffUpdateApi} from '../services/api';

function StaffsCreate({setRefreshRequired,staffId}) {

  const [staffs,setStaffs]=useState({name:"",age:"",place:"",department:"",salary:"",image:""})


  useEffect(()=>{

    getStaffDetails(staffId)

  },[staffId])

  async function getStaffDetails(staffId){

    let res=await staffDetailApi(staffId)

    if (res.status>199 && res.status<300){

      setStaffs(res.data)
    }
  }
  async function handleSubmit(event){
    event.preventDefault()
    if(staffId){
       let res=await staffUpdateApi(staffId,staffs)
      
       console.log(res);
       reSet()
       setRefreshRequired(Math.random())
       
    }
    else{
      let res=await staffCreateApi(staffs)
      
      console.log(res);
      reSet()
      setRefreshRequired(Math.random())
     
    }

    
   
    
  }
  function reSet(){
    setStaffs({name:"",age:"",place:"",department:"",salary:"",image:""})
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8 border border-3 rounded shadow p-4">
            {staffId ?<h3 className='text-center my-2'>Edit Staff </h3> : <h3 className='text-center my-2'>Add New  Staff </h3>}
            <form action="" onSubmit={handleSubmit}>
              <div className="mb-3 d-flex gap-1">
                <div className='w-50'>
                  <label htmlFor="">Name</label>
                  <input
                  value={staffs.name}
                   type="text"
                  className='form-control'
                  onChange={(e)=>setStaffs({...staffs,name:e.target.value})}
                   />
                </div>

                <div className='w-50'>
                  <label htmlFor="">Age</label>
                  <input type="text"
                  value={staffs.age}
                   className='form-control'
                   onChange={(e)=>setStaffs({...staffs,age:e.target.value})}
                    />
                </div>
              </div>
              <div className="mb-3 d-flex gap-1">
                <div className='w-50'>
                  <label htmlFor="">Place</label>
                  <input type="text"
                  value={staffs.place}
                   className='form-control'
                   onChange={(e)=>setStaffs({...staffs,place:e.target.value})}
                    />
                </div>

                <div className='w-50'>
                  <label htmlFor="">Department</label>
                  <input type="text"
                  value={staffs.department}
                  className='form-control'
                  onChange={(e)=>setStaffs({...staffs,department:e.target.value})}
                   />
                </div>
              </div>
              <div className="mb-3  d-flex gap-1">
                <div className='w-50'>
                  <label htmlFor="">Salary</label>
                  <input type="text"
                  value={staffs.salary}
                  className='form-control'
                  onChange={(e)=>setStaffs({...staffs,salary:e.target.value})}
                   />
                </div>

                <div className='w-50'>
                  <label htmlFor="">Image</label>
                  <input type="file"
                   accept='image/*'
                  className='form-control'
                  onChange={(e)=>setStaffs({...staffs,image:e.target.files[0]})} />
                </div>
              </div>
              <div className="mb-3">
                {staffId ? <button type='submit'>Edit</button> : <button type='submit'>Add</button>}
              </div>
            </form>
          </div>
          <div className="col-2"></div>
        </div>
      </div>

    </div>
  )
}

export default StaffsCreate
