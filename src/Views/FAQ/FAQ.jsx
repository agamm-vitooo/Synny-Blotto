import React from 'react'
import { Question } from './FAQ/Question'
import { ImageFAQ } from './ImageFAQ/ImageFAQ'

export const FAQ = () => {
  return (
    <div className="FAQ min-h-screen">
      <h1 className='text-2xl font-semibold text-black mt-14'>FAQ</h1>
      <div className='flex flex-wrap justify-between items-center'>
        <Question/>
        <ImageFAQ/>
      </div>
    </div>
  )
}
