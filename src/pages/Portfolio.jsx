import React, { useState } from 'react'
import {RiCloseFill} from 'react-icons/ri';
import {FiSquare, FiMinus} from 'react-icons/fi';

export default function Portfolio() {
  const [selected, setSelected] = useState({});
  const projects = [
    {
      name:'String Lab Solution', 
      link:'https://stringlabsolutions.vercel.app/', 
      discription:''
    },
    {
      name:'Bhujon', 
      link:'https://bhojon-39d34.web.app', 
      discription:''
    },
    {
      name:'Bonik', 
      link:'https://inventory-managemnt-system.web.app/', 
      discription:''
    },
  ];
  return (
    <div className=''>
      <h1>Portfolio</h1>
      <div className='flex w-full'>
        {/* Project Preview */}
        <div className='w-4/6 m-3 rounded-xl border border-purple-900 shadow-2xl shadow-purple-900'>
          <div className='flex rounded-t-xl bg-purple-900 items-center justify-between py-2 px-4 text-xl border-b border-slate-600'>
            <h1>{selected.name ? selected.name : 'String Lab Solution'}</h1>
            <div className='flex items-center justify-center space-x-3'>
              <FiMinus size={20}/>
              <FiSquare size={20}/>
              <RiCloseFill size={25}/>
            </div>
          </div>
          <iframe src={selected.link ? selected.link : 'https://stringlabsolutions.vercel.app/'} className='rounded-b-xl' title="Example Website" width="100%" height="600px" />
        </div>
        {/* Project List */}
        <div className='w-2/6 m-3 rounded-xl border border-purple-900 shadow-2xl shadow-purple-900'>
          <div className='flex rounded-t-xl bg-purple-900 items-center justify-between py-2 px-4 text-xl border-b border-slate-600'>
            <h1>Project.</h1>
            <div className='flex items-center justify-center space-x-3'>
              <FiMinus size={20}/>
              <FiSquare size={20}/>
              <RiCloseFill size={25}/>
            </div>
          </div>
          <div className='h-[600px]'>
          {projects.map((project, index) => (
            <div 
              key={index} 
              onClick={()=>setSelected(project)}
              className={`${selected.name === project.name ? 'ring-1 ring-purple-900 shadow shadow-purple-900' : ' hover:bg-purple-900 hover:bg-opacity-40'}
              flex text-xl items-center justify-start space-x-6 p-2 m-2 rounded-xl cursor-pointer`}>
              <p>{index+1}.</p>
              <h1>{project.name}</h1>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  )
}
