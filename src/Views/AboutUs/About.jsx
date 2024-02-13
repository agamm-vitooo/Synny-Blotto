import React from 'react'
import { AboutImage } from './Image/AboutImage'
import { AboutContent } from './Content/AboutContent'

export const About = () => {
  return (
    <div className='min-h-screen'>
      <h1 className='text-2xl font-semibold text-black'>
        Why Us ?
      </h1>
      <div className="content lg:flex items-center">
        <AboutImage/>
        <AboutContent/>
      </div>
      <button className='btn text-white border-none w-fit mt-5 lg:mt-0' style={{ backgroundColor: '#F26666' }}>Buy Now</button>
    </div>
  )
}
