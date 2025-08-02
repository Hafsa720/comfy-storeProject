import React from 'react'
import { Link } from 'react-router-dom'


const CrauselImages=[hero1, hero2, hero3, hero4]
import hero1 from '../assets/hero1.webp'
import hero2 from '../assets/hero2.webp'
import hero3 from '../assets/hero3.webp'
import hero4 from '../assets/hero4.webp'
const Hero = () => {
  return (
    <div className='grid lg:grid-cols-2 gap-24 items-center'>
     <div>
      <h1 className='max-w-2xl text-2xl font-bold tracking-tight sm:text-6xl '>
       We are changing the way you 
      </h1>
      <p className='mt-8 max-w-xl text-lg leading-8'>
       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum ipsa, nulla nostrum impedit ut pariatur molestias magni temporibus quod dolore, laboriosam velit! Iste, rem tempora ea repellat perferendis explicabo quia.
      </p>
      <div className="mt-10">
       <Link to='/products' className='btn btn-primary'>
       Our Products
       </Link>
      </div>
     </div>
     <div className='hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box'> 
{CrauselImages.map((image)=>{
return <div  key={image} className="carousel-item">
 <img src={image}  className='rounded-box h-full w-130 object-cover'/>
</div>
})}
     </div>
    </div>
  )
}

export default Hero