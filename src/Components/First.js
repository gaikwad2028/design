import React from 'react'
import img from "../base 1 (1).png"
import pic from "../girl2.png"
import pic1 from "../girl1.jpg"
import active from "../active.png"
import { NavLink } from 'react-router-dom'
export default function First() {
    return (
        <div className="first">
            <div className='img1'>
                <img src={img} alt="logo" className='logo'></img>
            </div>

            <div className='images'>
                <img src={pic1} alt="girl" className='g-2'></img>
                <img src={pic} alt="girl" className='g-1'></img>
                <img src={pic1} alt="girl" className='g-2'></img>
            </div>

            <p className='meet'>Meet up</p>
            <p className='description'> By clicking Log In, you agree with our Terms.
                Learn how we process your data in our Privacy
                Policy and Cookies Policy.</p>
            <div className='symbol'>
                <img src={active}></img></div>
            <div className='btn'>
        <NavLink to="/secon"> <button className='btn-1'>Create  an account</button></NavLink>
                <p className='info'>Sign in</p>
            </div>
        </div>
    )
}
