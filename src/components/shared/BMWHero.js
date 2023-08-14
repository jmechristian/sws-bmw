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
      <div className='mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 overflow-hidden'>
        <div className='px-6 pb-24 sm:pb-24 lg:col-span-7 lg:px-0 lg:pb-40 lg:pt-28 xl:col-span-6'>
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
          <div className='mx-auto max-w-2xl lg:pl-6 xl:pl-0 lg:pr-16'>
            <h1 className='mt-12 text-4xl font-bold tracking-tight text-gray-900 sm:mt-9 sm:text-5xl'>
              BMW Supplier Training for Spare Parts
            </h1>
            <p className='mt-6 text-lg leading-8 text-gray-500'>
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
                className='rounded-md text-lg bg-bmw-lightblue px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-clemson-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clemson'
              >
                Get started
              </a>
              <a
                href='https://learn.packagingschool.com/users/sign_in'
                className='flex items-center gap-1 font-semibold text-lg'
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
        <div className='relative lg:col-span-5 overflow-hidden lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0'>
          <img
            className='aspect-[2/2] lg:aspect-[3/2] w-full bg-center bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full'
            src='https://packschool.s3.amazonaws.com/DI23_000124107-S_FINAL.jpeg'
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default BMWHero;
