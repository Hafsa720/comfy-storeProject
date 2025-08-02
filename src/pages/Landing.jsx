import React from 'react'
import { FeaturedProducts, Hero } from '../components'
const url='/products?featured=true'
import { customFetch } from '../utils'
export const loader=async()=>{
  const response=await customFetch(url)
  const products=response.data.data
  //console.log(products,response.data);

  
  return {products}
  
}
const Landing = () => {
  return (
<>
<Hero/>
<FeaturedProducts/>
</>
  )
}

export default Landing