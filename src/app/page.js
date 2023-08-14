import BMWHero from '@/components/shared/BMWHero';
import BMWSteps from '@/components/shared/BWMSteps';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col gap-24 pb-24'>
      <BMWHero />
      <div className=' max-w-7xl mx-auto'>
        <BMWSteps />
      </div>
    </main>
  );
}
