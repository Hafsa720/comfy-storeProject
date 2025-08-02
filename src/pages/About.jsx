import React from 'react'

const About = () => {
  return (
    <>
      <div className='flex flex-wrap items-center gap-x-6 gap-2 justify-center'>
        <h1 className='text-4xl font-bold leading-none  tracking-tight sm:text-6xl'>
          We love
        </h1>
        <div className='stats bg-primary shawdow'>
          <div className='stat'>
            <div className='stat-title text-primary-content text-4xl font-bold tracking-widest'>
              comfy
            </div>
          </div>
        </div>
      </div>
      \
      <p className='mt-6 text-lg leading-8 max-w-2xl mx-auto'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
        placeat incidunt similique quasi expedita? Pariatur cum, est iste quidem
        excepturi voluptas hic earum quia facere ratione, cupiditate magni sequi
        quae distinctio dolorum ab fugit adipisci repellat beatae aliquam.
        Necessitatibus, dignissimos.
      </p>
    </>
  )
}

export default About
