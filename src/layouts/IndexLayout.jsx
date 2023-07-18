import React from 'react'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import { Outlet } from 'react-router-dom'

const IndexLayout = () => {
  return (
    <>
     <div className="">
        <Navbar/>
        <div className="container-fluid">
          <div className="row">
            <Sidebar/>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <Outlet/>
            </main>
          </div>
        </div>
      </div>
    </>
  )
}

export default IndexLayout