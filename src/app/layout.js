import Image from 'next/image';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'SWS BMW Landing Page',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='bg-black w-full py-9 pl-9'>
          <div className='w-full max-w-[512px] '>
            <Image
              src={
                'https://packschool.s3.amazonaws.com/PS-BMW-Logo-Lockup-vv3-1024x108.png'
              }
              height={54}
              width={512}
              layout='responsive'
              alt='On behalf of BWM GROUP'
            />
          </div>
        </div>
        {children}
        <div className='bg-black py-16'>
          <div className='flex flex-col justify-center items-center'>
            <div className='text-white text-sm'>
              South Carolina Commission on Higher Education License #5400
            </div>
            <div className='text-bmw-gold text-sm'>
              Copyright © 2022 The Packaging School, LLC. All Rights Reserved.
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
