'use client'

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from '../../redux/features/cart/cartSlice'

const ShoppingPage = () => {
  const cartItems = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()

  return (
    <div className='container p-4'>
      <h2 className='text-2xl font-bold mb-4'>Savatcha</h2>
      {cartItems.length === 0 ? (
        <p>Savatcha bo‘sh</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className='border p-2 mb-2 flex justify-between items-center'>
            <div>
              <p className='font-bold'>{item.title}</p>
              <p>${item.price}</p>
            </div>
            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className='text-red-500 font-bold'
            >
              O‘chirish
            </button>
          </div>
        ))
      )}
    </div>
  )
}

export default ShoppingPage
