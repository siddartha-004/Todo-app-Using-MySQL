import React from 'react'
import NavigationBar from '../NavigationBar/NavigationBar'
import {Outlet} from 'react-router-dom'
import './RootLayout.css'
function RootLayout() {
  return (
    <div className='container-0'>
           
    <div className='container-1'>
    <NavigationBar/>
    </div>
    <div className='container-2'>
     <Outlet/>
    </div>
</div>
  )
}

export default RootLayout