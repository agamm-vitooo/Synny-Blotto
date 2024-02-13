import React from 'react';
import YogurtHero from '../../../assets/images/YogurtBanner.png';

export const Hero = () => {
  return (
    <div>
      <img
        src={YogurtHero}
        alt='Yogurt Hero'
        className='mx-auto rounded-lg mb-4 lg:mb-0 lg:mr-4 lg:max-w-2xl'
      />
    </div>
  );
};
