import Link from 'next/link';
import React from 'react';
import {
  PencilSquareIcon,
  BookOpenIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline';

const BMWSteps = () => {
  return (
    <div className='w-full h-full bg-white px-6 scroll-mt-12' id='start'>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 container-7xl gap-9'>
        <div className='border  border-gray-200 rounded-lg p-4 shadow-lg'>
          <div className='bg-bmw-lightblue rounded-t-lg w-full aspect-[1/1]'>
            <div className='w-full h-full flex flex-col justify-between p-6'>
              <div className='flex justify-between items-center w-full'>
                <div className='text-4xl lg:text-6xl tracking-tighter font-bold text-white'>
                  01
                </div>
              </div>
              <div className='text-5xl tracking-tighter font-helvetica-bold text-white'>
                Take
                <br /> Survey
              </div>
            </div>
          </div>
          <div className='px-4 py-6 border rounded-b-lg text-gray-600 text-center'>
            To be completed by the
            <br /> initial supplier contact
          </div>
          <div className='w-full mt-6 bg-bmw-coolgray  py-4 text-center rounded'>
            <Link
              href={'/sws-bmw-start-survey'}
              className='w-full rounded-lg  text-white font-helvetica-bold text-lg'
            >
              Start Here: Survey
            </Link>
          </div>
        </div>
        <div className='border border-gray-200 rounded-lg p-4 shadow-lg'>
          <div className='bg-bmw-blue rounded-t-lg w-full aspect-[1/1]'>
            <div className='w-full h-full flex flex-col justify-between p-6'>
              <div className='flex justify-between items-center w-full'>
                <div className='text-4xl lg:text-6xl tracking-tighter font-bold text-white'>
                  02
                </div>
              </div>
              <div className='text-5xl tracking-tighter font-helvetica-bold text-white'>
                Complete
                <br /> Training
              </div>
            </div>
          </div>
          <div className='px-4 py-6 border rounded-b-lg text-gray-600 text-center'>
            BMW will provide your
            <br /> onboarding link
          </div>
          <div className='w-full mt-6 bg-bmw-coolgray  py-4 text-center rounded'>
            <Link
              href={'/sws-bmw-overview-training'}
              className='w-full rounded-lg  text-white font-helvetica-bold text-lg'
            >
              Training Overview & FAQs
            </Link>
          </div>
        </div>
        <div className='aspect-[1/1] border shadow-lg  border-gray-200 rounded-lg p-4'>
          <div className='bg-bmw-red rounded-lg w-full aspect-[1/1]'>
            <div className='w-full h-full flex flex-col justify-between p-6'>
              <div className='flex justify-between items-center w-full'>
                <div className='text-3xl lg:text-6xl tracking-tighter font-bold text-white'>
                  03
                </div>
              </div>
              <div className='text-5xl tracking-tighter font-helvetica-bold text-white'>
                Complete
                <br /> Assignment
              </div>
            </div>
          </div>
          <div className='px-4 py-6 border rounded-b-lg text-gray-600 text-center'>
            The assignment is completed by
            <br /> the main supplier contact
          </div>
          <div className='px-4 py-4 mt-7 font-helvetica-bold text-black lg:text-lg text-center lg:leading-snug'>
            The assignment will be part of the training
          </div>
        </div>
      </div>
    </div>
  );
};

export default BMWSteps;
