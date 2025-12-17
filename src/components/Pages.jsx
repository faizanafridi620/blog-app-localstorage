import React from 'react'

function Pages({totalBlogs,blogsPerPage,currentPage,setPage}) {
  const totalPages = Math.ceil(totalBlogs/blogsPerPage)

  if(totalPages <= 1) return null

  const handlePrev = () => {
    setPage((prev) => prev - 1)
  }

  const handleNext = () => {
    setPage((prev => prev + 1))
  }

  return (
    <div className='flex justify-center items-center gap-4 mt-8'>
      <button
      className='px-4 py-2 rounded-md border text-sm font-medium
                   disabled:opacity-50 disabled:cursor-not-allowed
                   hover:bg-gray-100 transition'
      disabled={currentPage === 1}
      onClick={handlePrev}
      >
        Prev
      </button>
      <p>
        <span className='px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium'>{currentPage}</span>
      </p>
      <button
      className='px-4 py-2 rounded-md border text-sm font-medium
                   disabled:opacity-50 disabled:cursor-not-allowed
                   hover:bg-gray-100 transition'
      disabled={currentPage === totalPages}
      onClick={handleNext}
      >
        Next
      </button>
      </div>
  )
}

export default Pages