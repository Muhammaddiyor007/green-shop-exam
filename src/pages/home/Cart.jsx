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
      <div className="p-4 container">
        <h2 className="text-xl font-bold mb-4">Savatchadagi Mahsulotlar</h2>
  
        {cartItems.length === 0 ? (
          <p>Savatcha hozircha bo'sh.</p>
        ) : (
          <ul className="space-y-2">
            {cartItems.map((item) => (
              <li key={item.id} className="border p-3 rounded shadow-sm">
                <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-[70px] h-[70px]"
                    />
                <p>
                  <strong>{item.name}</strong>
                </p>
                <p>Narxi: ${item.price}</p>
                <p>Miqdori: {item.quantity}</p>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="mt-2 px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
                >
                  O‘chirish
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <Products/>
    </>
  );
};

export default Cart;