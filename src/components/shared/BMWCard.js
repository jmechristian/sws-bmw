import React from 'react';
import {
  PencilSquareIcon,
  BookOpenIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

const BMWCard = ({ title, icon, content }) => {
  return (
    <div className='border  border-gray-200 rounded-lg p-4 shadow-lg h-full'>
      <div className='bg-base-light rounded-t-lg w-full'>
        <div className='w-full h-full flex flex-col justify-between'>
          <div className='flex flex-col justify-center items-center w-full gap-3'>
            <div className='bg-white rounded-full flex justify-center items-center'>
              <Image src={icon} width={100} height={100} alt='icon' />
            </div>
            <div className='flex justify-center items-center h-24 bg-bmw-green w-full'>
              <div className='text-xl text-white font-helvetica-bold tracking-tighter font-bold text-center '>
                {title}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='px-4 py-6 border rounded-b-lg text-gray-600 text-center text-sm'>
        {content}
      </div>
    </div>
  );
};

export default BMWCard;
