import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  decreaseQuantity,
  removeFromCart,
} from "../store/cartSlice";

const Cart = () => {
  const { items, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );

  const dispatch = useDispatch();
  return (
    <div className="max-w-xl mx-auto mt-8 p-4 border rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">🛒 Cart</h2>

      {items.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border-b py-2"
        >
          <div>
            <p className="font-medium">{item.name}</p>
            <p className="text-sm text-gray-600">
              ${item.price} x {item.quantity}
            </p>
          </div>

          <div className="flex">
            <button
              onClick={() => dispatch(decreaseQuantity(item.id))}
              className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 mr-2"
            >
              ➖
            </button>

            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <div className="mt-4 font-semibold">
        Total Items: {totalQuantity} <br />
        Total Price: ${totalPrice.toFixed(2)}
      </div>

      <button
        onClick={() => dispatch(clearCart())}
        className="mt-4 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
      >
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
