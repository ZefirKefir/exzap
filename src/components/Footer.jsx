import { Phone } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className='px-5 py-8 mx-auto text-white bg-red-800 sm:py-10 lg:py-16'>
      <div className='mx-auto text-center'>
        <h4 className='text-xl font-bold tracking-wide lg:text-2xl'>Butun Andijon bo'yicha bepul yetkazib berish!</h4>
        <p className='mt-1 text-base italic xl:text-lg'>Quyidagi variantlar orqali bizga be'malol murojat qiling.</p>
      </div>
      <div className='flex flex-col items-center justify-center gap-4 mt-6 sm:flex-row sm:gap-12 lg:gap-20'>
        <a
          href="tel:+998905247758"
          className='flex items-center gap-2 text-xl font-semibold tracking-wide underline duration-500 text-amber-200 hover:text-white'
        >
          <Phone size={32} className='text-amber-200' />
          +998905247758
        </a>
        <a
          href='https://t.me/Exzap_Nodirbek/'
          target="_blank"
          className='flex items-center gap-2 text-xl font-semibold tracking-wide underline duration-500 text-amber-200 hover:text-white'
        >
          <svg
            className='w-8 -translate-x-0.5 
              fill-amber-200
            '
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z" />
          </svg>
          Exzap Nodirbek
        </a>
      </div>
    </footer>
  )
}

export default Footer