import React from 'react'
import { ProductList } from '../../components/Product/ProductList'

export const FeaturedProducts = () => {
  return (
    <div className='min-h-screen'>
      <div className='products'>
        <h1 className='text-2xl font-semibold text-black mt-10'>Our Products</h1>
          <ProductList/>
      </div>
    </div>
  )
}
