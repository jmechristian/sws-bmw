'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SurveyModal from '@/components/shared/SurveyModal';

const SurveyWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='pt-16 pb-40 flex flex-col items-center justify-center gap-16 max-w-7xl mx-auto'>
      <div className='flex flex-col lg:flex-row lg:gap-24 justify-center items-center px-6 lg:px-0'>
        <Image
          src={
            'https://packschool.s3.amazonaws.com/BMW-Survey-icon-GREY-pvrs2ew1dt4f4g36nlqp28iwlp2lk7wgq2te01badu.png'
          }
          width={200}
          height={213}
          alt='start survey'
        />
        <div className='flex flex-col justify-center items-center'>
          <div className='text-bmw-gray font-helvetica-bold text-center mt-16 lg:mt-0'>
            ATTENTION: Survey is to be completed by the initial supplier
            contact.
          </div>
          <div className='font-helvetica-bold text-3xl mt-12 text-center'>
            Are you the initial supplier contact?
          </div>
          <div className='flex flex-col md:flex-row md:items-center md:gap-16 mt-6'>
            <Link href={'/sws-bmw-survey'}>
              <div className='lg:mt-0 hover:scale-110 transition ease-in bg-bmw-gold text-white text-center font-helvetica-bold cursor-pointer text-lg w-52 py-1.5 rounded-lg'>
                YES
              </div>
            </Link>
            <div
              className='mt-3 lg:mt-0 bg-bmw-gold hover:scale-110 transition ease-in text-white text-center font-helvetica-bold cursor-pointer text-lg w-52 py-1.5 rounded-lg'
              onClick={() => setIsOpen(true)}
            >
              NO
            </div>
            <SurveyModal open={isOpen} close={() => setIsOpen(false)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyWrapper;
