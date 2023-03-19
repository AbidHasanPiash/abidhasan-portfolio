import React from 'react'
import {SiGithub, SiLinkedin, SiGmail, SiFacebook} from 'react-icons/si';

export default function Contact() {
  return (
    <div>
      Contact
      
      <div className='p-3'>
          <div><SiGithub/></div> 
          <div><SiLinkedin/></div> 
          <div><SiGmail/></div> 
          <div><SiFacebook/></div> 
        </div>
    </div>
  )
}
