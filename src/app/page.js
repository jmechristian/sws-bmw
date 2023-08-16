import BMWHero from '@/components/shared/BMWHero';
import BMWSteps from '@/components/shared/BWMSteps';
import FadeIn from '@/components/shared/FadeIn';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata = {
  title: 'SWS BMW Landing Page',
};

export default function Home() {
  return (
    <FadeIn>
      <main className='flex min-h-screen flex-col gap-24 lg:gap-40 pb-24 lg:pb-40'>
        <BMWHero />
        <div className=' max-w-7xl mx-auto'>
          <BMWSteps />
        </div>
      </main>
    </FadeIn>
  );
}
