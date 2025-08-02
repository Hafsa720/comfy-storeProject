import React from 'react'
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom'
const ComplexPagination = () => {
  const { meta } = useLoaderData()
  const { pageCount, page } = meta.pagination

  const { search, pathname } = useLocation()
  const navigate = useNavigate()
  const handleChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search)
    searchParams.set('page', pageNumber)
    navigate(`${pathname}?${searchParams.toString()}`)
  }

  const AddPageButton = ({ pageNumber, activeClass }) => {
    return (
      <button
        key={pageNumber}
        onClick={() => handleChange(pageNumber)}
        className={`btn btn-xs sm:btn-md border-none join-item ${
          activeClass ? 'bg-base-300 border-base-300' : ''
        }`}
      >
        {pageNumber}
      </button>
    )
  }
  const renderPageButtons = () => {
    const pageButtons = []
    //first button
    pageButtons.push(
      AddPageButton({ key: 1, pageNumber: 1, activeClass: page === 1 })
    )

    //dot btn
    if (page > 3) {
      pageButtons.push(
        <button className='join-item btn btn-md  sm:btn-md' key='dot-2'>
          ...
        </button>
      )
    }
    //active page
    if (page !== 1 && page !== pageCount) {
      pageButtons.push(
        AddPageButton({ key: page, pageNumber: page, activeClass: true })
      )
    }
    //dot btn
    if (page < pageCount - 2) {
      pageButtons.push(
        <button className='join-item btn btn-xs sm:btn-md ' key='dot-1'>
          ...
        </button>
      )
    }
    //last button
    if (pageCount !== 1) {
      pageButtons.push(
        AddPageButton({
          key: pageCount,
          pageNumber: pageCount,
          activeClass: page === pageCount,
        })
      )
    }
    return pageButtons
  }
  console.log(renderPageButtons())

  if (pageCount < 2) return null
  return (
    <div className='mt-16 flex justify-end'>
      <div className='join'>
        <button
          className='btn btn-xs sm:btn-md join-item'
          onClick={() => {
            let prevPage = page - 1
            if (prevPage < 1) prevPage = pageCount
            handleChange(prevPage)
          }}
        >
          Prev
        </button>
        {renderPageButtons()}
        {/*  */}
        <button
          className='btn btn-xs sm:btn-md join-item'
          onClick={() => {
            let nextPage = page + 1
            if (nextPage > pageCount) nextPage = 1
            handleChange(nextPage)
          }}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default ComplexPagination
