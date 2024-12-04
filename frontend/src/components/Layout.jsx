import React from 'react'
import Aside from '../common/Aside'
import Header from '../common/Header'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

const Layout = () => {
  return (
    <>
    <Header/>
    <Aside/>
    <div>
    <ToastContainer />

  <div className="startbar-overlay d-print-none" />
  <div className="page-wrapper">
   <Outlet/>
  </div>
</div>


    </>
  )
}

export default Layout