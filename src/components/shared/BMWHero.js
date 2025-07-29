'use client';

import React from 'react';
import {
  ArrowLongRightIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/solid';
import Link from 'next/link';
import { HomeIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

const BMWHero = () => {
  const router = useRouter();
  return (
    <div className='relative bg-white'>
      <div className='mx-auto max-w-[2000px] lg:grid lg:grid-cols-12 lg:gap-x-8 overflow-hidden'>
        <div className='px-6 md:px-12 pb-24 pt-16 lg:col-span-6 xl:px-12 xl:pb-40 xl:pt-28 xl:col-span-6'>
          <div className='bg-gray-100 mb-16 px-4 w-fit py-2 rounded-lg flex justify-center items-center gap-2 cursor-pointer'>
            <div>
              <QuestionMarkCircleIcon className='w-7 h-7 text-gray-400' />
            </div>
            <div className='text-gray-800 leading-snug'>
              Need Help? Email{' '}
              <a href='mailto:info@packagingschool.com'>
                info@packagingschool.com
              </a>
            </div>
          </div>
          <div className=''>
            <h1 className='text-4xl font-bold tracking-tight text-gray-900 xl:mt-9 xl:text-5xl'>
              BMW Supplier &nbsp;Training for Spare Parts
            </h1>
            <p className='mt-6 xl:text-lg leading-normal text-gray-500'>
              This training is for the onboarding of new BMW Spare Parts
              Suppliers as well as a refresher for existing Suppliers.{' '}
              <span className='font-semibold'>
                Please be aware that the BMW Aftersales Department has been
                recently renamed to BMW Customer Support.
              </span>
            </p>
            <div className='mt-10 flex items-center gap-x-6'>
              <a
                href='#start'
                className='rounded-md text-lg font-helvetica-bold bg-bmw-lightblue px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-clemson-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clemson'
              >
                Get started
              </a>
              <a
                href='https://packagingschool.com/login?returnTo=https://bmw.packagingschool.com'
                className='flex items-center gap-1 font-semibold text-lg font-helvetica-bold'
                target='_blank'
                rel='noreferrer'
              >
                <span>Login</span>
                <div>
                  <ArrowLongRightIcon className='w-6 h-6' />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className='relative lg:col-span-6'>
          <img
            className='aspect-[2/2] lg:aspect-[3/2] w-full bg-bottom bg-gray-50 object-cover lg:h-full'
            src='https://packschool.s3.amazonaws.com/DI23_000123994.webp'
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default BMWHero;
