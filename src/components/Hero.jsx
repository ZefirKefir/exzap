import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <section className='container flex flex-col items-center gap-12 px-5 mx-auto my-40 hero md:px-8 xl:px-10 md:flex-row lg:gap-28'>
      {/* left - cta */}
      <div className='md:max-w-1/2'>
        <h1 className='text-3xl font-bold tracking-wide md:text-4xl'>
          Something exciting!<br />
          Do <span className='text-red-800'>not</span> miss your chance
        </h1>
        <p className='mt-3 mb-4 max-w-3/4'>
          Osmoning rangi ko'k, bu yerda bo'lsa sizning textingiz bo'lishi mumkin. Nima yozishni bilsangiz, bemalol aytaverasiz.<br />P.S. Кнопка o'zbekchada "tugma" bo'lar ekan
        </p>
        <Button>Katalogni ko'rish</Button>
      </div>
      {/* right side */}
      <div className='relative w-full aspect-5/3 grow'>
        <div className='para h-[85%] aspect-[0.57] absolute -top-3 -left-1'>
          <img src='public/images/hero1.jpg' alt='hero1' className='object-cover w-full h-full' />
        </div>
        <div className='z-20 para h-[110%] aspect-[0.65] absolute -bottom-[23%] left-[50%] -translate-x-1/2'>
          <img src='public/images/hero2.jpg' alt='hero2' className='object-cover w-full h-full' />
        </div>
        <div className='para h-4/5 aspect-[0.68] absolute right-0 top-[5%]'>
          <img src='public/images/hero3.jpg' alt='hero3' className='object-cover w-full h-full' />
        </div>
      </div>
    </section>
  )
}

export default Hero