import React from 'react';
import { Dialog } from '@headlessui/react';
import Image from 'next/image';
import { XCircleIcon } from '@heroicons/react/24/solid';

const CompletionModal = ({ open, close }) => {
  return (
    <Dialog open={open} onClose={() => close()} className='relative z-50'>
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className='fixed inset-0 bg-black/30' aria-hidden='true' />

      {/* Full-screen container to center the panel */}
      <div className='fixed inset-0 flex items-center justify-center p-4'>
        {/* The actual dialog panel  */}
        <Dialog.Panel className='mx-auto max-w-lg lg:max-w-xl rounded bg-white relative'>
          <div className='flex flex-col justify-center items-center p-12 gap-6'>
            <div className='w-24'>
              <Image
                src='https://packschool.s3.amazonaws.com/bmw-logo-landing-page.jpeg'
                width={300}
                height={300}
                alt='BMW Logo'
              />
            </div>
            <div className='font-helvetica-bold text-gray-600 text-center text-lg'>
              Thank yocccccu for submitting your survey answers. BMW will review
              your comments and reach out to you and your team members with the
              a corresponding Training Links. Once you receive this link, please
              make sure you initiate your account and start learning!
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default CompletionModal;
