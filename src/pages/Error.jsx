import React from 'react'
import { useRouteError, Link } from 'react-router-dom'
const Error = () => {
  const error = useRouteError()
  console.log(error)
  return (
    <main className='grid min-h-[100vh] place-items-center px8'>
      <div className='text-center'>
        <p className='text-9xl font-semibold text-primary'>404</p>
        <h1 className='mt-4 text-3xl font-bold tracking-tight sm:text-5xl'>page not found</h1>
        <p>sorry! we could not found page</p>
        <div className="mt-10">
         <Link to='/' className='btn btn-secondary'>back home</Link> 
        </div>
      </div>
    </main>
  )
}

export default Error
