import React from 'react'
import img from "../base 1 (1).png"
import { GrFacebook } from "react-icons/gr";
import { BsGoogle } from "react-icons/bs";
import { ImAppleinc } from "react-icons/im";
import { NavLink } from 'react-router-dom';

export default function Secon() {
  return (
    <div className='second'>
        <div className="second">
            <div className='img1'>
                <img src={img} alt="logo" className='logo'></img>
            </div>
            <p className='cform'> Sign upto Contact</p>
            <div className='btn-2'>
            <button className='sign up'>Sign-up</button>
            <NavLink to="/Third">  <button className='sign up'>Use-Phone number</button> </NavLink>   
            </div>
           <div className='name'> <p className='name-1'> or sign up with</p> 
</div> </div>
 <div className='icons'>
  <div className='ic'>
              <GrFacebook className="icon" size="md"></GrFacebook>
              <BsGoogle className="icon" size="md"></BsGoogle>
              <ImAppleinc className="icon" size="md"></ImAppleinc>
              </div>
            <p className='terms'>Terms & Condition</p>  
            </div>     
           
    </div>
  )
}
