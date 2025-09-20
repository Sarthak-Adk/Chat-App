import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

function layout() {
  return (
    <>
    <div className='bg-gray-200 h-screen flex gap-2 '>
      <Navbar/> 
      <Outlet/>
    </div>
    </>
  )
}

export default layout
