'use client';
import CompletionModal from '@/components/shared/CompletionModal';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(true);

  const onSubmit = async (data) => {
    setIsLoading(true);
    const formData = new FormData();
    // Hidden field key/values.
    formData.append('u', '58');
    formData.append('f', '58');
    formData.append('s', 's');
    formData.append('c', '0');
    formData.append('m', '0');
    formData.append('act', 'sub');
    formData.append('v', '2');
    formData.append('or', '75f119b7799c9b8767585cc5cf233eb5');

    formData.append('email', data.email);
    formData.append('fullname', data.fullname);
    formData.append('field[47]', data.field[47]);
    formData.append('field[48]', data.field[48]);
    formData.append('field[55]', data.field[55]);
    formData.append('field[83]', data.field[83]);
    formData.append('field[58]', data.field[58]);
    formData.append('field[56]', data.field[56]);
    formData.append('field[60]', data.field[60]);
    formData.append('field[53]', data.field[53]);
    formData.append('field[61]', data.field[61]);
    formData.append('field[63]', data.field[63]);
    formData.append('field[62]', data.field[62]);
    formData.append('field[84]', data.field[84]);
    formData.append('field[65]', data.field[65]);
    formData.append('field[52]', data.field[52]);
    formData.append('field[50]', data.field[50]);

    try {
      const sendEmail = await fetch(
        'https://packagingschool42200.activehosted.com/proc.php',
        {
          method: 'POST',
          body: formData,
          mode: 'no-cors',
        }
      );
      console.log(sendEmail);
      setIsLoading(false);
      setIsSubmitted(true);
      router.push('/sws-bmw-survey-thank-you');
    } catch (err) {
      setIsLoading(false);
      setIsSubmitted(true);
      console.log('Request failed', err);
      router.push('/sws-bmw-survey-thank-you');
    }
  };

  return (
    <>
      <div className='pb-24 max-w-7x mx-auto container'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col max-w-xl mx-auto gap-9'
        >
          <div className='w-full'>
            <label
              htmlFor='fullname'
              className='block font-helvetica-bold font-medium leading-6 text-gray-900'
            >
              Full Name*
            </label>
            <div className='mt-2'>
              <input
                {...register('fullname', { required: true })}
                type='text'
                name='fullname'
                id='fullname'
                className='block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 px-2 focus:ring-2 focus:ring-inset focus:ring-bmw-blue sm:text-sm sm:leading-6'
                placeholder='Enter full name'
              />
            </div>
          </div>
          <div className='w-full'>
            <label
              htmlFor='email'
              className='block font-helvetica-bold font-medium leading-6 text-gray-900'
            >
              Email*
            </label>
            <div className='mt-2'>
              <input
                {...register('email', { required: true })}
                type='email'
                name='email'
                id='email'
                className='block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 px-2 focus:ring-2 focus:ring-inset focus:ring-bmw-blue sm:text-sm sm:leading-6'
                placeholder='Enter full name'
              />
            </div>
          </div>
          <div className='w-full'>
            <label
              htmlFor='field[47]'
              className='block font-helvetica-bold font-medium leading-6 text-gray-900'
            >
              Please provide your BMW supplier number in following format:
              8digit number without spaces or hyphen (example: 94219311)*
            </label>
            <div className='mt-2'>
              <textarea
                {...register('field[47]', { required: true })}
                name='field[47]'
                id='field[47]'
                className='block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 px-2 focus:ring-2 focus:ring-inset focus:ring-bmw-blue sm:text-sm sm:leading-6'
                placeholder='example: 94219311'
              />
            </div>
          </div>
          <div className='w-full'>
            <label
              htmlFor='field[48]'
              className='block font-helvetica-bold font-medium leading-6 text-gray-900'
            >
              Have you delivered spare parts to BMW Aftersales from this
              location before?*
            </label>
            <div className='mt-2'>
              <select
                id='field[48]'
                {...register('field[48]', { required: true })}
                name='field[48]'
                className='mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-bmw-blue sm:text-sm sm:leading-6'
                defaultValue='Empty'
              >
                <option value={'Empty'}></option>
                <option value={'Yes'}>Yes</option>
                <option value={'No'}>No</option>
              </select>
            </div>
          </div>
          <div className='w-full'>
            <label
              htmlFor='field[55]'
              className='block font-helvetica-bold font-medium leading-6 text-gray-900'
            >
              Who is the responsible counterpart for the BMW spare parts
              material planner? Please enter first and last name, email and
              telephone number. If unknown, please indicate.*
            </label>
            <div className='mt-2'>
              <textarea
                {...register('field[55]', { required: true })}
                name='field[55]'
                id='field[55]'
                className='block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 px-2 focus:ring-2 focus:ring-inset focus:ring-bmw-blue sm:text-sm sm:leading-6'
                placeholder=' '
              />
            </div>
          </div>
          <div className='w-full'>
            <label
              htmlFor='field[83]'
              className='block font-helvetica-bold font-medium leading-6 text-gray-900'
            >
              Are your BMW Aftersales spare parts part numbers known?
            </label>
            <div className='mt-2'>
              <select
                id='field[83]'
                {...register('field[83]', { required: true })}
                name='field[83]'
                className='mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-bmw-blue sm:text-sm sm:leading-6'
                defaultValue='Empty'
              >
                <option value={'Empty'}></option>
                <option value={'Yes'}>Yes</option>
                <option value={'No'}>No</option>
              </select>
            </div>
          </div>
          <div className='w-full'>
            <label
              htmlFor='field[58]'
              className='block font-helvetica-bold font-medium leading-6 text-gray-900'
            >
              Are your BMW spare Parts and Part Numbers equal to your BMW series
              production parts and part numbers?*
            </label>
            <div className='mt-2'>
              <select
                id='field[58]'
                {...register('field[58]', { required: true })}
                name='field[58]'
                className='mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-bmw-blue sm:text-sm sm:leading-6'
                defaultValue='Empty'
              >
                <option value={'Empty'}></option>
                <option value={'Yes, for all'}>Yes, for all</option>
                <option value={'No, for all'}>No, for all</option>
                <option value={'Partially'}>Partially</option>
              </select>
            </div>
          </div>
          <div className='w-full'>
            <label
              htmlFor='field[56]'
              className='block font-helvetica-bold font-medium leading-6 text-gray-900'
            >
              Who is the responsible IT counterpart for BMW? Please enter first
              and last name, email and telephone number. If unknown, please
              indicate.*
            </label>
            <div className='mt-2'>
              <textarea
                {...register('field[56]', { required: true })}
                name='field[56]'
                id='field[56]'
                className='block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 px-2 focus:ring-2 focus:ring-inset focus:ring-bmw-blue sm:text-sm sm:leading-6'
                placeholder=' '
              />
            </div>
          </div>
          <div className='w-full'>
            <label
              htmlFor='field[60]'
              className='block font-helvetica-bold font-medium leading-6 text-gray-900'
            >
              Is a spare parts specific EDI connection (Call Off and ASN)
              available?*
            </label>
            <div className='mt-2'>
              <select
                id='field[60]'
                {...register('field[60]', { required: true })}
                name='field[60]'
                className='mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-bmw-blue sm:text-sm sm:leading-6'
                defaultValue='Empty'
              >
                <option value={'Empty'}></option>
                <option value={'Yes'}>Yes</option>
                <option value={'No'}>No</option>
                <option value={'In Progress'}>In Progress</option>
              </select>
            </div>
          </div>
          <div className='w-full'>
            <label
              htmlFor='field[53]'
              className='block font-helvetica-bold font-medium leading-6 text-gray-900'
            >
              Who is the responsible counterpart for BMW spare parts packaging?
              Please enter first and last name, email and telephone number. If
              unknown, please indicate.*
            </label>
            <div className='mt-2'>
              <textarea
                {...register('field[53]', { required: true })}
                name='field[53]'
                id='field[53]'
                className='block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 px-2 focus:ring-2 focus:ring-inset focus:ring-bmw-blue sm:text-sm sm:leading-6'
                placeholder=' '
              />
            </div>
          </div>
          <div className='w-full'>
            <label
              htmlFor='field[61]'
              className='block font-helvetica-bold font-medium leading-6 text-gray-900'
            >
              Is the spare part packaging agreement process known?*
            </label>
            <div className='mt-2'>
              <select
                id='field[61]'
                {...register('field[61]', { required: true })}
                name='field[61]'
                className='mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-bmw-blue sm:text-sm sm:leading-6'
                defaultValue='Empty'
              >
                <option value={'Empty'}></option>
                <option value={'Yes'}>Yes</option>
                <option value={'No'}>No</option>
              </select>
            </div>
          </div>
          <div className='w-full'>
            <label
              htmlFor='field[63]'
              className='block font-helvetica-bold font-medium leading-6 text-gray-900'
            >
              Are the Aftersales specific BMW Service Part Label and labeling
              requirements for spare parts known?*
            </label>
            <div className='mt-2'>
              <select
                id='field[63]'
                {...register('field[63]', { required: true })}
                name='field[63]'
                className='mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-bmw-blue sm:text-sm sm:leading-6'
                defaultValue='Empty'
              >
                <option value={'Empty'}></option>
                <option value={'Yes'}>Yes</option>
                <option value={'No'}>No</option>
              </select>
            </div>
          </div>

          <div className='w-full'>
            <label
              htmlFor='field[62]'
              className='block font-helvetica-bold font-medium leading-6 text-gray-900'
            >
              If the BMW Spare Parts Packaging Planner contact is known, please
              enter the name and email. If unknown, please indicate.*
            </label>
            <div className='mt-2'>
              <textarea
                {...register('field[62]', { required: true })}
                name='field[62]'
                id='field[62]'
                className='block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 px-2 focus:ring-2 focus:ring-inset focus:ring-bmw-blue sm:text-sm sm:leading-6'
                placeholder=' '
              />
            </div>
          </div>
          <div className='w-full'>
            <label
              htmlFor='field[84]'
              className='block font-helvetica-bold font-medium leading-6 text-gray-900'
            >
              Who is the responsible counterpart for BMW spare parts parts
              quality? Please enter first and last name, email and telephone
              number. If unknown, please indicate.*
            </label>
            <div className='mt-2'>
              <textarea
                {...register('field[84]', { required: true })}
                name='field[84]'
                id='field[84]'
                className='block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 px-2 focus:ring-2 focus:ring-inset focus:ring-bmw-blue sm:text-sm sm:leading-6'
                placeholder=' '
              />
            </div>
          </div>
          <div className='w-full'>
            <label
              htmlFor='field[65]'
              className='block font-helvetica-bold font-medium leading-6 text-gray-900'
            >
              Is the process of initial sample approval (ISIR) known?*
            </label>
            <div className='mt-2'>
              <select
                id='field[65]'
                {...register('field[65]', { required: true })}
                name='field[65]'
                className='mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-bmw-blue sm:text-sm sm:leading-6'
                defaultValue='Empty'
              >
                <option value={'Empty'}></option>
                <option value={'Yes'}>Yes</option>
                <option value={'No'}>No</option>
              </select>
            </div>
          </div>
          <div className='w-full'>
            <label
              htmlFor='field[52]'
              className='block font-helvetica-bold font-medium leading-6 text-gray-900'
            >
              Who is the main responsible person in case a training is required?
              This person is also responsible for conducting the final
              assignment (also known as LOPA Aftersales). Please enter first and
              last name, email and telephone number and job responsibility.*
            </label>
            <div className='mt-2'>
              <textarea
                {...register('field[52]', { required: true })}
                name='field[52]'
                id='field[52]'
                className='block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 px-2 focus:ring-2 focus:ring-inset focus:ring-bmw-blue sm:text-sm sm:leading-6'
                placeholder=' '
              />
            </div>
          </div>
          <div className='w-full'>
            <label
              htmlFor='field[50]'
              className='block font-helvetica-bold font-medium leading-6 text-gray-900'
            >
              Please select the preferred language in case a training is
              required. *
            </label>
            <div className='mt-2'>
              <select
                id='field[50]'
                {...register('field[50]', { required: true })}
                name='field[50]'
                className='mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-bmw-blue sm:text-sm sm:leading-6'
                defaultValue='Empty'
              >
                <option value={'Empty'}></option>
                <option value={'English'}>English</option>
                <option value={'Spanish (only for suppliers located in USMCA)'}>
                  Spanish (only for suppliers located in USMCA)
                </option>
                <option value={'German'}>German</option>
                <option value={'Mandarin'}>Mandarin</option>
              </select>
            </div>
          </div>
          <button
            id='_form_58_submit'
            className='bg-bmw-blue rounded-lg py-1.5 text-white font-helvetica-bold text-lg'
            type='submit'
          >
            {isLoading ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </div>
    </>
  );
};

export default Page;
