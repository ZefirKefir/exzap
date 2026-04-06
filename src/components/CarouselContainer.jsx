import CarouselSlider from "./CarouselSlider"

const CarouselContainer = ({ children, carousel, number = 0 }) => {
  return (
    <div>
      {children}
      <CarouselSlider number={number} carousel={carousel} />
    </div>
  )
}

export default CarouselContainer