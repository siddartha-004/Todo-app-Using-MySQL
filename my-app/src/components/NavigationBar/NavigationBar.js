import React from 'react'
import {BsSearch} from 'react-icons/bs';
import {NavLink} from 'react-router-dom'
import './NavigationBar.css'
function NavigationBar() {
    const activeLink={
        color:"#274035",
        fontWeight:"bold"
    };
    const inactiveLink={
        color:"#070C0A"
    }
  return (
    
         <div className='navb'>
        <div className='search'>
            <div className='text'>Search</div>
           <div className='icon1'><BsSearch/>
           </div>
        </div>
        <div className='matter'>
        <div className=' nav-link m-3 '>
            <NavLink className='nav-link' style={({isActive})=>{return isActive?activeLink:inactiveLink}} to="/">Today</NavLink>
            
            </div>
            <div className='m-3'>
            <NavLink className='nav-link'style={({isActive})=>{return isActive?activeLink:inactiveLink}} to="/all">All Tasks</NavLink>
            
        </div>
        <hr/>
        <div className='m-3'>
        <NavLink className='nav-link' style={({isActive})=>{return isActive?activeLink:inactiveLink}} to="/high">High</NavLink>
            
        </div>
        <div className='m-3'>
        <NavLink className='nav-link' style={({isActive})=>{return isActive?activeLink:inactiveLink}} to="/medium">Medium</NavLink>
        </div>
        <div className='m-3'>
        <NavLink className='nav-link' style={({isActive})=>{return isActive?activeLink:inactiveLink}} to="/low">Low</NavLink>
        </div>
        <hr/>
        <div className='m-3'>Personal</div>
        </div>

    </div>
    
  )
}

export default NavigationBar