import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <section className='hero container mx-auto px-5 md:px-8 xl:px-10 my-40 flex flex-col items-center md:flex-row gap-12 lg:gap-28'>
      {/* left - cta */}
      <div className='md:max-w-1/2'>
        <h1 className='font-bold text-3xl md:text-4xl tracking-wide'>
          Something exciting!<br />
          Do <span className='text-red-800'>not</span> miss your chance
        </h1>
        <p className='mt-3 mb-4 max-w-3/4'>
          Osmoning rangi ko'k, bu yerda bo'lsa sizning textingiz bo'lishi mumkin. Nima yozishni bilsangiz, bemalol aytaverasiz.<br />P.S. Кнопка o'zbekchada "tugma" bo'lar ekan
        </p>
        <Button>Katalogni ko'rish</Button>
      </div>
      {/* right side */}
      <div className='w-full aspect-5/3 relative grow'>
        <div className='para h-[85%] aspect-[0.57] absolute -top-3 -left-1'>
          <img src='public/hero1.jpg' alt='hero1' className='w-full h-full object-cover' />
        </div>
        <div className='z-20 para h-[110%] aspect-[0.65] absolute -bottom-[23%] left-[50%] -translate-x-1/2'>
          <img src='public/hero2.jpg' alt='hero2' className='w-full h-full object-cover' />
        </div>
        <div className='para h-4/5 aspect-[0.68] absolute right-0 top-[5%]'>
          <img src='public/hero3.jpg' alt='hero3' className='w-full h-full object-cover' />
        </div>
      </div>
    </section>
  )
}

export default Hero