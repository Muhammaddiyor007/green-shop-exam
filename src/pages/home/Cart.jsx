import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";
import Products from "../shop/Products";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <>
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Savatchadagi Mahsulotlar</h2>

        {cartItems.length === 0 ? (
          <div className="text-lg text-center text-gray-500 py-6">
            <p>Savatcha hozircha bo'sh.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 bg-white border rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex items-center">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-[80px] h-[80px] object-cover rounded-md"
                  />
                  <div className="ml-4">
                    <p className="text-lg font-semibold text-gray-800">{item.title}</p>
                    <p className="text-sm text-gray-600">Narxi: ${item.price}</p>
                    <p className="text-sm text-gray-600">Miqdori: {item.quantity}</p>
                  </div>
                </div>

                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-500 bg-white hover:bg-red-100 px-4 py-2 rounded-lg font-semibold border border-red-500 hover:text-white hover:border-transparent transition-all"
                >
                  O‘chirish
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <Products />
    </>
  );
};

export default Cart;
