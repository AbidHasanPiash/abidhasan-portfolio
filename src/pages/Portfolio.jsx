import React, { useState } from 'react'
import {RiCloseFill} from 'react-icons/ri';
import {FiSquare, FiMinus} from 'react-icons/fi';
import {SiReact, SiNodedotjs, SiMongodb, SiDaisyui, SiTailwindcss, SiFirebase} from 'react-icons/si';

export default function Portfolio() {
  const [selected, setSelected] = useState({});
  const projects = [
    {
      name:'String Lab Solution', 
      link:'https://stringlabsolutions.vercel.app/', 
      category:'Full stuck',
      discription:'React, Tailwind CSS, Express Js, Mongodb',
      discription2: [<SiReact/>, <SiTailwindcss/>, <SiNodedotjs/>, <SiMongodb/>] ,
    },
    {
      name:'Bhujon', 
      link:'https://bhojon-39d34.web.app', 
      category:'Frontend',
      discription:'React, Tailwind CSS, Daysi UI, Firebase',
      discription2: [<SiReact/>, <SiTailwindcss/>, <SiDaisyui/>, <SiFirebase/>] ,
    },
    {
      name:'Bonik', 
      link:'https://inventory-managemnt-system.web.app/', 
      category:'Frontend',
      discription:'React, Tailwind CSS, Firebase',
      discription2: [<SiReact/>, <SiTailwindcss/>, <SiFirebase/>] ,
    },
  ];
  return (
    <div className='m-3'>
      <h1 className='text-2xl'>Websites.</h1>
      <div className='flex flex-col lg:flex-row w-full'>
        {/* Project Preview */}
        <div className='lg:w-4/6 w-full my-3 rounded-xl border border-purple-900 shadow-2xl shadow-purple-900'>
          <div className='flex rounded-t-xl bg-purple-900 items-center justify-between py-2 px-4 text-xl border-b border-slate-600'>
            <h1>{selected.name ? selected.name : 'String Lab Solution'}</h1>
            <div className='flex items-center justify-center space-x-3'>
              <FiMinus size={20}/>
              <FiSquare size={20}/>
              <RiCloseFill size={25}/>
            </div>
          </div>
          <iframe 
            src={selected.link ? selected.link : 'https://stringlabsolutions.vercel.app/'} 
            className='rounded-b-xl w-full h-[600px]' 
            title="Example Website"
          />
        </div>
        {/* Project List */}
        <div className='lg:w-2/6 w-full lg:m-3 mt-4 rounded-xl border border-purple-900 shadow-2xl shadow-purple-900'>
          <div className='flex rounded-t-xl bg-purple-900 items-center justify-between py-2 px-4 text-xl border-b border-slate-600'>
            <h1>Project.</h1>
            <div className='flex items-center justify-center space-x-3'>
              <FiMinus size={20}/>
              <FiSquare size={20}/>
              <RiCloseFill size={25}/>
            </div>
          </div>
          <div className='lg:h-[500px] h-fit'>
          {projects.map((project, index) => (
            <div 
              key={index} 
              onClick={()=>setSelected(project)}
              className={`${selected.name === project.name ? 'ring-1 ring-purple-900 shadow shadow-purple-900' : ' hover:bg-purple-900 hover:bg-opacity-40'}
              p-2 m-2 rounded-xl cursor-pointer`}>
              <div className='flex lg:text-2xl text-xl '>
                <p>{index+1}.</p>
                <h1>{project.name}</h1> 
              </div>
              <div className='flex items-center justify-between text-lg py-3 px-6'>
                <p>{project.category}</p>
                <div className='flex space-x-3'>
                  {project.discription2 && project.discription2.map((des, index)=>(
                    <span key={index} className='text-xl'>{des}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  )
}
