'use client'

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from '../../redux/features/cart/cartSlice'

const ShoppingPage = () => {
  const cartItems = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()

  return (
    <div className='max-w-5xl mx-auto p-4'>
      <h2 className='text-3xl font-bold mb-6 text-center text-gray-800'>Savatcha</h2>

      {cartItems.length === 0 ? (
        <div className='text-xl text-center text-gray-400 py-6'>
          <p>Savatcha bo‘sh</p>
        </div>
      ) : (
        <div className='space-y-4'>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className='flex justify-between items-center p-4 bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow'
            >
              <div className='flex items-center'>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className='w-[80px] h-[80px] object-cover rounded-md'
                />
                <div className='ml-6'>
                  <p className='text-lg font-semibold text-gray-800'>{item.title}</p>
                  <p className='text-sm text-gray-500'>${item.price}</p>
                </div>
              </div>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className='px-4 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors'
              >
                O‘chirish
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ShoppingPage
