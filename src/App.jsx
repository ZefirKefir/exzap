
import { Phone } from 'lucide-react'
import './App.css'

function App() {
  return (
    <>
      <header className='
        fixed top-0 left-0 w-full
        px-5 py-4 bg-red-800/90 rounded-b-lg text-white
        flex items-center justify-between
        [&>*,&>*>*]:duration-500
      '>
        <a href='tel:+998905247758' className='
          group w-12 aspect-square rounded-full
          flex items-center justify-center
          bg-white/20 hover:bg-white/90 hover:scale-105
          hover:shadow-[0_1.5px_4px_0_#422] hover:-translate-y-0.5
          active:shadow-none
          active:scale-95 active:translate-y-0  
        '>
          <Phone className='w-8 group-hover:text-rose-800/80' />
        </a>
        {/* logo */}
        <div className='group flex flex-col items-center gap-3
          cursor-pointer'>
          <img src='/logo.png' alt='logo' className='w-32 group-hover:scale-[1.02] origin-top' />

          <p className='text-sm uppercase font-extrabold tracking-wider group-hover:scale-[.98] origin-bottom'>
            Andijon
            <span className='mx-2'>|</span>
            <span>Nodirbek</span>
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
            active:scale-95 active:translate-y-0
          '>
          {/* telegram icon */}
          <svg
            className='w-8 -translate-x-0.5 
              fill-white  group-hover:fill-sky-600/90
            '
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z" />
          </svg>
        </a>
      </header>
      <main className='container px-6 mt-32'>
        <div className='hero flex flex-col md:flex-row gap-12'>
          <h1 className='max-w-120 bg-black/20 font-bold text-3xl tracking-wide'>
            chuj tebe w zopu jfdfjlsjadaf
            kdfldsflas lorem39 that is not working somewhy... im sad
          </h1>
        </div>
      </main>
    </>
  )
}

export default App
