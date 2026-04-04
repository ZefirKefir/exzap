const CarouselContainer = ({ children, isShort = false, carousel }) => {
  return (
    <div className='relative px-4 mt-6 md:px-0 mb-14'>
      <div className={`w-full ${isShort ? 'overflow-x-scroll lg:overflow-x-visible' : 'overflow-x-hidden'}`}>

        {/* variant 1 */}
        <ul className={`w-max duration-500
          ${isShort ? 'hidden' : 'flex'} items-center gap-8 *:shrink-0
          ${(!isShort) ? 'carousel' : ''} ${carousel ? '' : 'no-more'}
        `}>
          {children}
        </ul>
        {/* variant 2 (if short) */}
        <ul className={`
          ${isShort ? 'flex' : 'hidden'} sm:mx-0 no-more lg:justify-center gap-8 items-center *:shrink-0`}>
          {children}
        </ul>

      </div>
    </div>
  )
}

export default CarouselContainer