import React from 'react'
import { redirect, useLoaderData } from 'react-router-dom'
import { toast } from 'react-toastify'
import { customFetch } from '../utils'
import { OrdersList, ComplexPagination, SectionTitle } from '../components'

export const loader =
  (store) =>
  async ({ request }) => {
    const user = store.getState().userState.user
    if (!user) {
      toast.warn('you must be logged in to view orders')
      return redirect('/login')
    }
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ])
    try {
      const response = await customFetch.get('/orders', {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      console.log(response)

      return { orders: response.data.data, meta: response.data.meta }
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        'there was an error placing your order'
      toast.error(errorMessage)
      if (error.response.status === 401 || 403) {
        toast.warn('you must be logged in to place an order')
        return redirect('/login')
      }
      return null
    }
  }
const Orders = () => {
  const { meta } = useLoaderData()
  if (meta?.Pagination?.total < 1) {
    return <SectionTitle text='please place an order' />
  }
  return (
    <>
      <SectionTitle text='Your Orders' />
      <OrdersList />
      <ComplexPagination />
    </>
  )
}

export default Orders
