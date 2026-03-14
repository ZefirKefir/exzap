import { Phone } from 'lucide-react'

import logo from '/public/logo.png';

const Navbar = () => {
  return (
    <header className='fixed top-0 left-0 z-50 w-full px-5 py-4 text-white bg-red-800 rounded-b-lg '>
      <nav className='
        flex items-center justify-between
        [&>*,&>*>*]:duration-500'
      >
        <a href='tel:+998905247758' className='
          group w-12 aspect-square rounded-full
          flex items-center justify-center
          bg-white/20 hover:bg-white/90 hover:scale-105
          hover:shadow-[0_1.5px_4px_0_#422] hover:-translate-y-0.5
          active:shadow-none
          active:scale-100 active:translate-y-0
          active:bg-white/90
        '>
          <Phone className='w-8 group-hover:text-rose-800/80 group-active:text-rose-800/80' />
        </a>
        {/* logo */}
        <div className='flex flex-col items-center gap-3 cursor-pointer group'>
          <img src={logo} alt='logo' className='w-32 group-hover:scale-[1.02] origin-top' />

          <p className='text-sm uppercase font-extrabold tracking-wider group-hover:scale-[.98] origin-bottom'>
            Andijon
            <span className='mx-2'>|</span>
            <span className='duration-500
              group-hover:text-yellow-300/80
              group-hover:drop-shadow-[0_0_5px_#000]
              group-active:text-yellow-300/80
              group-active:drop-shadow-[0_0_5px_#000]
            '>Nodirbek</span>
          </p>
        </div>
        <a
          href='https://t.me/Exzap_Nodirbek/'
          target='_blank'
          className='
            group w-12 aspect-square rounded-full
            flex items-center justify-center
            bg-white/20 hover:bg-white/90 hover:scale-105
            hover:shadow-[0_1.5px_4px_0_#422] hover:-translate-y-0.5
            active:shadow-none
            active:scale-100 active:translate-y-0
            active:bg-white/90
          '>
          {/* telegram icon */}
          <svg
            className='w-8 -translate-x-0.5 
              fill-white  group-hover:fill-sky-600/90 group-active:fill-sky-600/90
            '
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z" />
          </svg>
        </a>
      </nav>
    </header>
  )
}

export default Navbar