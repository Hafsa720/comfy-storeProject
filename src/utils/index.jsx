import axios from "axios";

const API_URL = 'https://strapi-store-server.onrender.com/api'

export const customFetch = axios.create({
 baseURL: API_URL,
})
export const formatPrice = (price) => {
  const dollarsAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format((price / 100).toFixed(2))
  return dollarsAmount
}

export const AmountOptions=(number)=>{
  return Array.from({length:number},(_,index)=>{
    const amount=index+1
    return<option key={amount} value={amount} >{amount}</option>
  })
}