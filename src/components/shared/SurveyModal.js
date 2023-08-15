import React from 'react';
import { Dialog } from '@headlessui/react';
import Image from 'next/image';
import { XCircleIcon } from '@heroicons/react/24/solid';

const SurveyModal = ({ open, close }) => {
  return (
    <Dialog open={open} onClose={() => close()} className='relative z-50'>
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className='fixed inset-0 bg-black/30' aria-hidden='true' />

      {/* Full-screen container to center the panel */}
      <div className='fixed inset-0 flex items-center justify-center p-4'>
        {/* The actual dialog panel  */}
        <Dialog.Panel className='mx-auto max-w-lg lg:max-w-xl rounded bg-white relative'>
          <div className='absolute top-3 right-3'>
            <div className='cursor-pointer' onClick={() => close()}>
              <XCircleIcon className='w-6 h-6 fill-gray-600' />
            </div>
          </div>
          <div className='flex flex-col justify-center items-center p-12 gap-6'>
            <div className='w-32'>
              <Image
                src='https://packschool.s3.amazonaws.com/bmw-logo-landing-page.jpeg'
                width={300}
                height={300}
                alt='BMW Logo'
              />
            </div>
            <div className='font-helvetica-bold text-gray-600 text-center text-lg'>
              Please{' '}
              <a
                href='https://learn.packagingschool.com/users/sign_in'
                className='underline text-bmw-blue'
              >
                log in
              </a>{' '}
              to the training directly and do not fill out this survey.
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default SurveyModal;
