
import Slider from '../components/Slider';

export default function Portfolio() {
  const slides = [
    'https://i.ibb.co/ncrXc2V/1.png',
    'https://i.ibb.co/B3s7v4h/2.png',
    'https://i.ibb.co/XXR8kzF/3.png',
    'https://i.ibb.co/yg7BSdM/4.png',
  ]
  
  return (
    <div className='m-3 space-y-6'>
      <h1 className='text-2xl text-center font-bold py-3'>Showcasing My Front-End Craftsmanship</h1>
      <div className='flex'>
        <div className='max-w-lg w-fit'>
          <Slider>
            {slides.map(s=>(
              <img src={s} alt="" />
            ))}
          </Slider>
        </div>
        <div className='z-10'>
          <div className='bg-slate-900 border-2 border-purple-500 h-fit -ml-10 mt-5 rounded-xl p-3'>
            <h1>String Lab Solution</h1>
            <p>This is a tech company which serve the web Solutions like ERP software.</p>
            <p>Category: Fullstack</p>
            <p>Technology: React Js, Tailwind CSS, Firebase, Node Js, Express Js, MongoDb.</p>
          </div>
          <div className='flex items-center justify-center w-full h-full'>
            <h1 className='text-9xl text-slate-800'>1</h1>
          </div>
        </div>
      </div>
      <div className='flex flex-row-reverse'>
        <div className='max-w-lg w-fit'>
          <Slider>
            {slides.map(s=>(
              <img src={s} alt="" />
            ))}
          </Slider>
        </div>
        <div className='z-10'>
          <div className='bg-slate-900 border-2 border-purple-500 h-fit -mr-10 mt-5 rounded-xl p-3'>
            <h1>String Lab Solution</h1>
            <p>This is a tech company which serve the web Solutions like ERP software.</p>
            <p>Category: Fullstack</p>
            <p>Technology: React Js, Tailwind CSS, Firebase, Node Js, Express Js, MongoDb.</p>
          </div>
          <div className='flex items-center justify-center w-full h-full'>
            <h1 className='text-9xl text-slate-800'>2</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

      /*
      import React, { useState } from 'react'
      import {RiCloseFill} from 'react-icons/ri';
      import {FiSquare, FiMinus} from 'react-icons/fi';
      import {SiReact, SiNodedotjs, SiMongodb, SiDaisyui, SiTailwindcss, SiFirebase} from 'react-icons/si';
      
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
          name:'CreativeHI admin', 
          link:'https://creativehidemo.vercel.app/', 
          category:'Frontend',
          discription:'React, Tailwind CSS, Firebase',
          discription2: [<SiReact/>, <SiTailwindcss/>, <SiFirebase/>] ,
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
      

        <div className='flex flex-col-reverse lg:flex-row w-full'>
          <div className='lg:w-4/6 w-full my-3 rounded-xl border border-purple-900 shadow-2xl shadow-purple-900'>
            <div className='flex rounded-t-xl bg-purple-900 items-center justify-between py-2 px-4 lg:text-lg border-b border-slate-600'>
              <h1>{selected.name ? selected.name : 'String Lab Solution'}</h1>
              <div className='flex items-center justify-center space-x-3'>
                <FiMinus size={15}/>
                <FiSquare size={15}/>
                <RiCloseFill size={20}/>
              </div>
            </div>
            <iframe 
              src={selected.link ? selected.link : 'https://stringlabsolutions.vercel.app/'} 
              className='bg-white rounded-b-xl w-full h-[600px]' 
              title="Example Website"
            />
          </div>
          <div className='lg:w-2/6 w-full lg:m-3 mt-4 rounded-xl border border-purple-900 shadow-2xl shadow-purple-900'>
            <div className='flex rounded-t-xl bg-purple-900 items-center justify-between py-2 px-4 lg:text-lg border-b border-slate-600'>
              <h1>Project.</h1>
              <div className='flex items-center justify-center space-x-3'>
                <FiMinus size={15}/>
                <FiSquare size={15}/>
                <RiCloseFill size={20}/>
              </div>
            </div>
            <div className='lg:h-[500px] h-fit'>
              <p className='text-xs lg:text-lg text-center p-2'>Please select on to preview.</p>
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  onClick={()=>setSelected(project)}
                  className={`p-2 m-2 rounded-xl cursor-pointer ring-1 ring-purple-900 shadow shadow-purple-900
                    ${selected.name === project.name 
                      ? 'bg-opacity-40 bg-purple-900' 
                      : ''
                    }`}>
                  <div className='flex lg:text-xl '>
                    <p>{index+1}.</p>
                    <h1>{project.name}</h1> 
                  </div>
                  <div className='flex items-center justify-between lg:text-lg py-3 px-6'>
                    <p>{project.category}</p>
                    <div className='flex space-x-3'>
                      {project.discription2 && project.discription2.map((des, index)=>(
                        <span key={index} className='lg:text-xl'>{des}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> 
      */