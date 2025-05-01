function SectionGappingWithoutAnimation({children}) {
    return (

    <div className="hidden md:grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-3 gap-4">
        {children}</div>
  )
}

export default SectionGappingWithoutAnimation