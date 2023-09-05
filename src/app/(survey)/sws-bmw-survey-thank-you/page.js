import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata = {
  title: 'BMW Supplier  Training for Spare Parts ',
};

const Page = () => {
  return (
    <div className='max-w-2xl mx-auto container pb-36'>
      <div className='flex flex-col justify-center items-center p-12 gap-6'>
        <div className='font-helvetica-bold text-gray-600 text-center text-lg'>
          Thank you for submitting your survey answers. BMW will review your
          comments and reach out to you and your team members with the a
          corresponding Training Links. Once you receive this link, please make
          sure you initiate your account and start learning!
        </div>
      </div>
    </div>
  );
};

export default Page;
