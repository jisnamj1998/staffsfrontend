import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import StaffsCreate from '../components/StaffsCreate'
import StaffsSummary from '../components/StaffsSummary'




function Index() {
  const [refreshRequired,setRefreshRequired]=useState('')

  const [staffId,setStaffId]=useState()
  return (
    <div>
      <Navbar></Navbar>
      <StaffsCreate setRefreshRequired={setRefreshRequired} staffId={staffId}></StaffsCreate>
      <StaffsSummary refreshRequired={refreshRequired} setStaffId={setStaffId}></StaffsSummary>
    </div>
  )
}

export default Index
