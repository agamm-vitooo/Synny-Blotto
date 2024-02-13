import React from 'react';
import { Hero } from './HeroBanner/hero';
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

export const HomeContent = () => {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className='content flex flex-wrap flex-row-reverse justify-between w-full max-w-screen-xl mx-auto items-center'>
        <Hero/>
        <div className='text-left'>
          <h1 className='text-6xl font-semibold text-black mb-5'>Take The World’s <br /> 
            <span className='font-thin text-5xl opacity-80'>Best Yogurt</span>
          </h1>
          <p className='text-black opacity-80 mb-9'>Greek Yougurt is a unique traditional product which contains no <br /> additives and preservatives. It is a healthy aperitif, source of energy and <br /> the best way to start the day.</p>
          <button className='btn text-white border-none w-1/3 mb-9' style={{ backgroundColor: '#F26666' }}>Buy Now</button>
          <div className='social flex gap-5'>
            <button>
              <FaInstagram size={25} color='F26666' />
            </button>
            <button>
              <FaFacebookF size={25} color='F26666' />
            </button>
            <button>
              <FaGoogle size={25} color='F26666' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};