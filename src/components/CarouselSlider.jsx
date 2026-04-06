import { useEffect } from 'react';
import data from '../../public/data'
import ProductImage from './ProductImage';

const CarouselSlider = ({ carousel, number }) => {
  const array = number === 1 ? data.oils
    : number === 2 ? data.antifreeze
      : number === 3 ? data.accumulators
        : number === 4 ? data.tires
          : number === 5 ? data.brakeFluids
            : number === 6 ? data.lubricants
              : number === 7 ? data.glassLiquids
                : number === 8 ? data.coolants
                  : [];
  const short = array.length <= 6;

  return (
    <div className='py-3'>
      <div className={`pb-2 mb-4 duration-200
        ${carousel ? 'overflow-x-hidden' : 'overflow-x-auto'}
      `}>
        <ul className={`flex w-max *:shrink-0 items-center gap-10 duration-300 hover:animate-pause
          ${array.length < 2 ? 'mx-auto'
            : array.length <= 4 ? 'slider animate-carousel m:animate-none m:mx-auto'
              : array.length <= 6 ? 'slider animate-carousel lg:animate-none lg:mx-auto'
                : array.length <= 9 ? 'slider animate-carousel 2xl:animate-none 2xl:mx-auto'
                  : 'slider animate-carousel'}
        `}>
          {array.map((item, i) => (
            <li key={i}>
              <ProductImage src={item.image} alt={item.name} />
            </li>
          ))}
          {array.map((item, i) => (
            <li key={i} className={`clone
              ${array.length <= 4 ? 'm:hidden' : ''}
              ${array.length <= 6 ? 'lg:hidden' : ''}
              ${array.length <= 9 ? '2xl:hidden' : ''}
            `}>
              <ProductImage src={item.image} alt={item.name} />
            </li>
          ))}
        </ul>
      </div>
    </div >
  )
}

export default CarouselSlider