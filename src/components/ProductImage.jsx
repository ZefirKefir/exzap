const ProductImage = ({ src, alt }) => {
  return (
    <img src={src} alt={alt} className="cursor-pointer max-w-48 max-h-20" />
  )
}

export default ProductImage