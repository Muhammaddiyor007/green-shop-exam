import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { addToCart, removeFromCart } from '../../../redux/cartSlice';

const Product = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const addToCartHandler = async (item) => {
    toast.success('Mahsulot savatchaga qo‘shildi!');

    try {
      const response = await axios.post('https://dummyjson.com/products/add', {
        ...item,
      });

      if (response.status === 200) {
        dispatch(addToCart(item));
      }
    } catch (error) {
      toast.error('Mahsulot qo\'shishda xatolik yuz berdi.');
    }
  };

  const removeFromCartHandler = (item) => {
    dispatch(removeFromCart(item.id)); 
    toast.success('Mahsulot savatchadan o‘chirildi!');
  };

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-6">
      {cartItems.length === 0 ? (
        <p className="text-center text-lg">Savatcha bo‘sh</p>
      ) : (
        <div className="flex flex-col gap-4">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center justify-between gap-4 border p-4 rounded-md shadow-md"
            >
              <div className="flex gap-4 items-center w-full sm:w-auto">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-[80px] h-[80px] object-cover rounded-md"
                />
                <div className="flex flex-col w-full sm:w-auto">
                  <p className="font-medium text-sm sm:text-base max-w-[140px] truncate">{item.title}</p>
                  <p className="text-xs sm:text-sm text-gray-500">SKU: {item.sku || 'N/A'}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <p className="text-sm sm:text-base text-gray-600">x{item.stock || 1}</p>

                <p className="text-[#46A358] text-[18px] sm:text-[20px] font-bold">
                  ${item.price}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                <button
                  onClick={() => addToCartHandler(item)}
                  className="bg-[#46A358] text-white px-4 py-2 rounded-md text-sm w-full sm:w-auto"
                >
                  Add to Cart
                </button>

                <button
                  onClick={() => removeFromCartHandler(item)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md text-sm w-full sm:w-auto"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Product;
