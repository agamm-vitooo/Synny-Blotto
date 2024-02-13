import React from 'react'
import Img1 from '../../assets/images/Featured/img-1.svg'
import Img2 from '../../assets/images/Featured/img-2.svg'
import Img3 from '../../assets/images/Featured/img-3.svg'

export const ProductList = () => {
  const products = [
    { id: 1, img: Img1, name: 'Banana strawberry', price: '$11.99' },
    { id: 2, img: Img2, name: 'Yogurt peachy', price: '$10.99' },
    { id: 3, img: Img3, name: 'Yogurt chocolate', price: '$9.99' }
    
  ];

  return (
    <div className='flex flex-wrap justify-around py-24 text-black text-left'>
      {products.map(product => (
        <div key={product.id} className={`card${product.id}`}>
          <img src={product.img} alt={product.name} className='w-fit mb-9' />
          <h3>{product.name}</h3>
          <p className='mt-1 mb-5'>{product.price}</p>
          <button className='btn text-white border-none mb-9 w-full' style={{ backgroundColor: '#F26666' }}>Buy Now</button>
        </div>
      ))}
    </div>
  )
}
