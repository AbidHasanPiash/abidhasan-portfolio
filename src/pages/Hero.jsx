import React from 'react'
import ProfilePicture from '../image/profile.png'
import {RiCloseFill} from 'react-icons/ri';
import {SiReact, SiNodedotjs, SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiFirebase, SiGithub, SiJira, SiCanva} from 'react-icons/si';
import {FiSquare, FiMinus} from 'react-icons/fi';

export default function Hero() {
  return (
    <div className='max-w-full grid grid-cols-2 gap-4 m-3'>
      <div className='col-span-2 w-96 mt-4 flex flex-col overflow-hidden rounded-xl ring-1 ring-purple-900 shadow-2xl shadow-purple-500'>
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
          className='mx-auto object-cover hover:rotate-3 hover:scale-110 duration-300'
        />
      </div>
      <div className='col-span-2 lg:col-span-1 lg:col-start-1 my-5 lg:py-10 pr-10 text'>
        <h1>Hello.</h1>
        <h1> I love to work as a Frontend developer with component-based UI design like React. </h1>
      </div>
      <div className='col-start-1 col-span-2 lg:col-start-2 h-full w-full mt-4 flex flex-col rounded-xl ring-1 ring-purple-900 shadow-2xl shadow-purple-500 hover:scale-105 duration-300'>
        <div className='flex items-center justify-between py-2 px-4 text-xl border-b border-slate-600'>
          <h1>My Expertise.</h1>
          <div className='flex items-center justify-center space-x-3'>
            <FiMinus size={20}/>
            <FiSquare size={20}/>
            <RiCloseFill size={25}/>
          </div>
        </div>
        <div className='p-3 space-y-5 text-2xl'>
          <div className='flex items-center justify-between'>
            <h1>Frontend</h1>
            <div className='flex items-center justify-center space-x-3'>
              <SiReact size={40}/>
              <SiJavascript size={40}/>
              <SiTailwindcss size={40}/>
              <SiHtml5 size={40}/>
              <SiCss3 size={40}/>
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <h1>Backend</h1>
            <div className='flex items-center justify-center space-x-3'>
              <SiNodedotjs size={40}/>
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <h1>Tools</h1>
            <div className='flex items-center justify-center space-x-3'>
              <SiFirebase size={40}/>
              <SiGithub size={40}/>
              <SiJira size={40}/>
              <SiCanva size={40}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
