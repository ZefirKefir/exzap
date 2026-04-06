const CarouselToggle = ({ carousel, setCarousel }) => {
  const handleOnButton = () => {
    setCarousel(true);
    localStorage.setItem('carousel', true);
  }
  const handleOffButton = () => {
    setCarousel(false);
    localStorage.setItem('carousel', false);
  }

  return (
    <div className={`fixed z-50 duration-150
      top-1/2 -translate-y-1/2
      right-2 sm:right-4
      flex flex-col gap-1 bg-red-800
      border-4 rounded-lg border-red-800
      font-bold text-lg text-red-800 tracking-wide
    `}>
      <button className={`group p-1.5 rounded-t-md cursor-pointer duration-300
          ${carousel ? 'bg-white/0' :
          'bg-white hover:bg-white/80 active:bg-white/50'}`}
        onClick={handleOnButton}
        disabled={carousel}
      >
        <svg className={`w-10 lg:w-12 duration-300
          ${carousel ? 'fill-white' : 'fill-red-800 group-hover:scale-[1.02] group-active:scale-100 group-active:fill-white'}`}
          viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M22,26H10a2,2,0,0,1-2-2V8a2,2,0,0,1,2-2H22a2,2,0,0,1,2,2V24A2,2,0,0,1,22,26ZM10,8V24H22V8Z" />
          <path d="M4,24H0V22H4V10H0V8H4a2,2,0,0,1,2,2V22A2,2,0,0,1,4,24Z" />
          <path d="M32,24H28a2,2,0,0,1-2-2V10a2,2,0,0,1,2-2h4v2H28V22h4Z" />
          <rect className="w-8 h-8 fill-none" />
        </svg>
      </button>
      <button className={`group p-1.5 rounded-b-md cursor-pointer duration-300
        ${(!carousel) ? 'bg-white/0' :
          'bg-white hover:bg-white/80 active:bg-white/50'}`}
        onClick={handleOffButton}
        disabled={!carousel}
      >
        <svg className={`w-10 lg:w-12 [&,*]:duration-300
          fill-none
          ${(!carousel) ? '*:fill-white' :
            '*:fill-red-800 group-active:*:fill-white group-hover:scale-[1.02] group-active:scale-100'}`}
          viewBox="0 0 24 24">
          <path d="M16.1359 18.2928C16.5264 18.6833 17.1596 18.6833 17.5501 18.2928L22.4375 13.4006C23.2179 12.6194 23.2176 11.3536 22.4369 10.5728L17.5465 5.68247C17.156 5.29195 16.5228 5.29195 16.1323 5.68247C15.7418 6.073 15.7418 6.70616 16.1323 7.09669L20.3179 11.2823C20.7085 11.6729 20.7085 12.306 20.3179 12.6965L16.1359 16.8786C15.7454 17.2691 15.7454 17.9023 16.1359 18.2928Z" />
          <path d="M7.88675 5.68247C7.49623 5.29195 6.86307 5.29195 6.47254 5.68247L1.58509 10.5747C0.804698 11.3559 0.805008 12.6217 1.58579 13.4024L6.47615 18.2928C6.86667 18.6833 7.49984 18.6833 7.89036 18.2928C8.28089 17.9023 8.28089 17.2691 7.89036 16.8786L3.70471 12.6929C3.31419 12.3024 3.31419 11.6692 3.70472 11.2787L7.88675 7.09669C8.27728 6.70616 8.27728 6.073 7.88675 5.68247Z" />
        </svg>
      </button>

    </div>
  )
}

export default CarouselToggle