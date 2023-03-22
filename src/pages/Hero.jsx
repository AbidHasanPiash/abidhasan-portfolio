import React from 'react'
import Typewriter from 'typewriter-effect';
import ProfilePicture from '../image/profile.png'
import {RiCloseFill} from 'react-icons/ri';
import {SiReact, SiNodedotjs, SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiFirebase, SiGithub, SiJira, SiCanva} from 'react-icons/si';
import {FiSquare, FiMinus} from 'react-icons/fi';

export default function Hero() {
  return (
    <div className='max-w-full grid grid-cols-2 gap-4 mx-3 mb-5'>
      {/* Profile picture */}
      <div className='col-span-2 lg:w-96 w-full mt-4 flex flex-col overflow-hidden rounded-xl ring-1 ring-purple-900 shadow-2xl shadow-purple-500'>
        <div className='flex items-center justify-between py-2 px-4 text-xl border-b border-slate-600'>
          <h1>Abid Hasan.</h1>
          <div className='flex items-center justify-center space-x-3'>
            <FiMinus size={20}/>
            <FiSquare size={20}/>
            <RiCloseFill size={25}/>
          </div>
        </div>
        <img 
          src={ProfilePicture} 
          alt="ProfilePicture"
          className='mx-auto object-cover hover:scale-110 duration-300'
        />
      </div>
      {/* Text about me */}
      <div className='col-span-2 lg:col-span-1 lg:col-start-1 my-5 lg:py-10'>
        <div className="lg:w-2/3 w-full font-medium bg-black pb-5">
          <div className='flex items-center justify-between py-2 px-4 lg:text-lg border-b border-slate-600'>
            <h1>Command Prompt.</h1>
            <div className='flex items-center justify-center space-x-3'>
              <FiMinus size={20}/>
              <FiSquare size={20}/>
              <RiCloseFill size={25}/>
            </div>
          </div>
          <div className='lg:text-2xl p-6'>
            <h1>Hello.</h1>
            <div className='flex space-x-5'>
              <h1>I am </h1>
              <Typewriter
                options={{
                  strings: ['Abid Hasan', 'a Frontend Developer'],
                  autoStart: true,
                  loop: true,
                  cursorClassName:'Typewriter__wrapper'
                }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* My Expertise  */}
      <div className='col-start-1 col-span-2 lg:col-start-2 h-full w-full mt-4 flex flex-col rounded-xl ring-1 ring-purple-900 shadow-2xl shadow-purple-500 hover:scale-105 duration-300'>
        <div className='flex items-center justify-between py-2 px-4 lg:text-xl border-b border-slate-600'>
          <h1>My Expertise.</h1>
          <div className='flex items-center justify-center space-x-3'>
            <FiMinus size={20}/>
            <FiSquare size={20}/>
            <RiCloseFill size={25}/>
          </div>
        </div>
        <div className='p-3 space-y-5 lg:text-xl'>
          <div className='flex items-center justify-between'>
            <h1>Frontend</h1>
            <div className='flex items-center justify-center space-x-3'>
              <SiReact size={25}/>
              <SiJavascript size={25}/>
              <SiTailwindcss size={25}/>
              <SiHtml5 size={25}/>
              <SiCss3 size={25}/>
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <h1>Backend</h1>
            <div className='flex items-center justify-center space-x-3'>
              <SiNodedotjs size={25}/>
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <h1>Tools</h1>
            <div className='flex items-center justify-center space-x-3'>
              <SiFirebase size={25}/>
              <SiGithub size={25}/>
              <SiJira size={25}/>
              <SiCanva size={25}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
