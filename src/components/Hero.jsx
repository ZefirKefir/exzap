import { ArrowRight } from 'lucide-react';

import hero1 from '/public/hero1.jpg';
import hero2 from '/public/hero2.jpg';
import hero3 from '/public/hero3.jpg';

const Hero = () => {
  const handleClick = () => {
    document.querySelector('#catalog').scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <section className='container flex flex-col items-center justify-center gap-12 px-5 mx-auto mb-20 mt-36 md:my-40 hero md:px-8 xl:px-10 md:flex-row lg:gap-28'>
      {/* left - cta */}
      <div className='md:max-w-1/2'>
        <h1 className='text-3xl font-bold tracking-wide md:text-4xl'>
          Mashina uchun kerak bo'lgan hamma narsa!
        </h1>
        <p className='mt-3 mb-4 sm:max-w-4/5'>
          Biz sizning ehtiyojlaringizni qondirish uchun keng turdagi mahsulotlarni taqdim etamiz.
          <span className='block h-3' />
          Bizning hamkorlarimiz haqida ma'lumotni quyida topishingiz mumkin.
        </p>
        <button className='group px-8 py-3 bg-red-800 rounded-full cursor-pointer
          flex items-center gap-2
          font-medium text-base tracking-wide text-white
          hover:scale-[1.015]
          duration-500
          active:scale-100
        '
          onClick={handleClick}
        >
          Katalogni ko'rish
          <ArrowRight className='w-4' />
        </button>
      </div>
      {/* right side */}
      <div className='relative w-full ml-[20%] xs:-ml-[5%] aspect-5/3 grow'>
        {/* decor start*/}
        <div className='absolute left-0 w-12 bg-red-800 rounded-full sm:w-40 top-1/5 aspect-square animate-ping-slow' />
        <div className='absolute w-12 delay-300 bg-red-900 rounded-full translate-x-1/5 -bottom-1/6 sm:w-40 right-1/2 aspect-square animate-ping' />
        <div className='absolute right-0 w-20 bg-red-900 rounded-full sm:w-60 top-1/5 aspect-square animate-ping-fast' />
        {/* decor end */}
        <div className='para h-[85%] aspect-[0.57] absolute -top-3 -left-1'>
          <img src={hero1} alt='hero1' className='object-cover w-full h-full' />
        </div>
        <div className='z-20 para h-[110%] aspect-[0.65] absolute -bottom-[23%] left-[50%] -translate-x-1/2'>
          <img src={hero2} alt='hero2' className='object-cover w-full h-full' />
        </div>
        <div className='para h-4/5 aspect-[0.68] absolute right-0 top-[5%]'>
          <img src={hero3} alt='hero3' className='object-cover w-full h-full' />
        </div>
      </div>
    </section>
  )
}

export default Hero