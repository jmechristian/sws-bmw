'use client';
import BMWFaqs from '@/components/shared/BMWFaqs';
import BMWOverview from '@/components/shared/BMWOverview';
import React from 'react';

const Page = () => {
  return (
    <div className='pt-9 pb-24 flex flex-col gap-9 container max-w-7xl mx-auto'>
      <div className='w-full text-center font-helvetica-bold text-4xl'>
        Training Overview
      </div>
      <BMWOverview />
      <BMWFaqs />
    </div>
  );
};

export default Page;
