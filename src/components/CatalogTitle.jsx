const CatalogTitle = ({ children }) => {
  return (
    <h3 className='flex items-center gap-6 ml-4 text-xl font-semibold tracking-wide sm:ml-10 xs:ml-6 md:text-2xl'>
      {children}
    </h3>
  )
}

export default CatalogTitle