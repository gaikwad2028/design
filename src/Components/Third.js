import React from 'react'
import back from "../logos/Vector (Stroke) (1).png"
import Menu from "../logos/Vector (Stroke) (2).png"
import Girl from "../logos/unsplash_-9yAcEumLfg.png"
import cross from "../logos/Vector (Stroke).png"
import star from "../logos/Vector (1).png"
import like from "../logos/Vector.png"
import Rectangel from "../logos/Rectangle 7.png"
import { BiMessageRoundedDetail } from "react-icons/bi";
import { AiOutlineContacts,AiTwotoneHeart} from "react-icons/ai";
export default function Third() {
  return (
    <>
    <div className='third'>
       <div className='logo-n'>
        <img src={back} alt="back" className='b'></img>
        <img src={Menu} alt="back" className='b'></img>
       </div>
       <div className='women' >
        <img src={Girl} alt="women" className='c'></img>
        <div className='match-info'>
        <p className='match -name'>Denisa Tema ,23</p>
        <p className='proffesion'> Proffesion Model</p>
        </div>
       </div>
       <div className='like'>
          <div className='cross'><img src={cross} alt="cross" className='l'></img></div>
         <div className='like-1'><img src={like} alt="like"  className='o'></img></div> 
        <div className='cross'> <img src={star} alt="cross"  className='l'></img></div> 
        </div>
      
    </div>
      <div className='hg'>
      <div className='rec-2'>
    <img src={Rectangel} alt="rec" className='rec'></img>
    <img src={Rectangel} alt="rec" className='rec-1'></img>
    </div>
    <AiTwotoneHeart className='lo' size="md"></AiTwotoneHeart>
    <BiMessageRoundedDetail className='ik' size="md" />
    <AiOutlineContacts className='ik' size="md"/>
  </div>
  </>
  )
}
