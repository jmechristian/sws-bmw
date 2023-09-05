import FadeIn from '@/components/shared/FadeIn';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';

export const metadata = {
  title: 'BMW Supplier  Training for Spare Parts ',
};

export default function SurveyLayout({ children }) {
  return (
    <FadeIn>
      <div className='flex flex-col'>
        <div
          className='py-16 w-full bg-cover bg-center bg-bmw-blue relative'
          style={{
            backgroundImage:
              'url("https://packschool.s3.amazonaws.com/BMW-Packaging-School-Background-HERO-4.jpeg")',
          }}
        >
          <div className='absolute inset-0 bg-bmw-blue/60 z-0' />
          <div className='flex flex-col lg:flex-row items-center gap-16 justify-between w-full max-w-7xl mx-auto container'>
            <div className='flex flex-col gap-6 px-6 xl:px-0 max-w-4xl w-full relative z-10'>
              <h2 className='text-white text-5xl max-w-xl'>
                BMW Supplier &nbsp;Training for Spare Parts
              </h2>
              <div className='text-white max-w-xl'>
                This training is for the onboarding of new BMW Spare Parts
                Suppliers as well as a refresher for existing Suppliers.
              </div>
              <div className='text-white font-helvetica-bold max-w-xl'>
                Please be aware that the BMW Aftersales Department has been
                recently renamed to BMW Customer Support.
              </div>
            </div>
            <div className='flex flex-col justify-center items-center gap-4 relative z-10'>
              <a href='https://learn.packagingschool.com/users/sign_in'>
                <div className='bg-bmw-gold text-white text-center font-helvetica-bold cursor-pointer text-lg w-52 py-1.5 rounded-lg'>
                  Login
                </div>
              </a>
              <div className='text-yellow-300 text-sm font-helvetica-bold cursor-pointer text-center'>
                Need help? Email{' '}
                <a href='mailto:info@packagingschool.com'>
                  info@packagingschool.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='w-fit py-16 mx-auto'>
          <div className='bg-bmw-blue text-white text-center font-helvetica-bold cursor-pointer md:text-lg w-52 lg:w-full px-6 py-1.5 rounded-lg leading-snug'>
            <Link href='/'>Supplier&nbsp; Training Home</Link>
          </div>
        </div>
        {children}
      </div>
    </FadeIn>
  );
}
