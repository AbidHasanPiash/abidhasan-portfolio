import Typewriter from 'typewriter-effect';
import {RiCloseFill} from 'react-icons/ri';
import {FiSquare, FiMinus} from 'react-icons/fi';

export default function About() {

  return (
    <div className='m-3'>
      <div >
        <div className="lg:w-2/3 w-full font-medium bg-black pb-10">
          <div className='flex items-center justify-between py-2 px-4 text-lg border-b border-slate-600'>
            <h1>Command Prompt.</h1>
            <div className='flex items-center justify-center space-x-3'>
              <FiMinus size={20}/>
              <FiSquare size={20}/>
              <RiCloseFill size={25}/>
            </div>
          </div>
          <div className='lg:text-2xl text-lg p-6 z-0'>
            <h1>Hello.</h1>
            <div className='flex space-x-5'>
              <h1>I am </h1>
              <Typewriter
                options={{
                  strings: ['Abid Hasan', 'a Fronted Developer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
        </div>
        <div className='my-5 mx-2'>
          <h1 className='lg:text-3xl text-xl py-4'>Educational Background</h1>
          <div>
            <h1 className='lg:text-2xl text-sm'>Bachelor of Science, Computer Science and Engineering</h1>
            <h2 className='lg:text-xl text-xs pt-3'>Bangladesh Army University of Science & Technology (BAUST)</h2>
            <p className='lg:text-xl text-xs'>November 2016 - April 2021</p>
            <ul className='list-disc ml-5 py-5 lg:text-xl text-xs'>
              <li>Intensive course with core computer science topics.</li>
              <li>C, C++, Java, Data Structures, Algorithms, OOP, DBMS.</li>
              <li>Android application development.</li>
              <li>Different software design patterns.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
