import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Buutons() {
  return (
    <div className='buttons'>
       <NavLink to="/First" ><button className='1'>Create Account</button></NavLink>
       <NavLink to="/secon" ><button className='1'>signup</button></NavLink>
    </div>
  )
}
