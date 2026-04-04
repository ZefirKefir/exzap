const CatalogTitle = ({ children }) => {
  return (
    <h3 className='flex items-center gap-6 ml-10 text-xl font-semibold tracking-wide md:text-2xl'>
      {children}
    </h3>
  )
}

export default CatalogTitle