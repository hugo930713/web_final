import { useState, useEffect } from "react";
import Header from "./components/header";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  const removeItem = (index) => {
    const newCartItems = cartItems.slice();
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
    localStorage.setItem("cart", JSON.stringify(newCartItems));
  };

  const updateQuantity = (index, quantity) => {
    const newCartItems = cartItems.slice();
    newCartItems[index].quantity = quantity;
    setCartItems(newCartItems);
    localStorage.setItem("cart", JSON.stringify(newCartItems));
  };

  return (
    <>
      <Header />
      <div className="h-screen pt-20 bg-gray-100">
        <h1 className="mb-10 text-2xl font-bold text-center">Cart Items</h1>
        <div className="justify-center px-6 mx-auto max-w-7xl md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            {cartItems.map((item, index) => (
              <div key={index} className="justify-between p-6 mb-6 bg-white rounded-lg shadow-md sm:flex sm:justify-start">
                <img
                  src={item.image_url}
                  alt="product-image"
                  className="w-full rounded-lg sm:w-40"
                />
                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div className="mt-5 sm:mt-0">
                    <h2 className="text-4xl font-bold text-gray-900">{item.name}</h2>
                    <p className="mt-1 text-xs text-gray-700">{item.size}</p>
                  </div>
                  <div className="flex justify-between mt-4 sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div className="flex items-center border-gray-100">
                      <span
                        className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                        onClick={() => updateQuantity(index, item.quantity - 1)}
                      >
                        {" "}
                        -{" "}
                      </span>
                      <input
                        className="w-12 h-8 pr-0 text-sm text-center bg-white border"
                        type="number"
                        value={item.quantity || 1}
                        min={1}
                        onChange={(e) => updateQuantity(index, parseInt(e.target.value))}
                      />
                      <span
                        className="px-3 py-1 duration-100 bg-gray-100 rounded-r cursor-pointer hover:bg-blue-500 hover:text-blue-50"
                        onClick={() => updateQuantity(index, item.quantity + 1)}
                      >
                        {" "}
                        +{" "}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <p className="text-2xl tracking-wide">NT${item.price}</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5 duration-150 cursor-pointer hover:text-red-500"
                        onClick={() => removeItem(index)}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Sub total */}
          <div className="h-full p-6 mt-6 bg-white border rounded-lg shadow-md md:mt-0 md:w-1/3">
            <div className="flex justify-between mb-2">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-gray-700">NT$ {
                cartItems.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0)
              }</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">運費</p>
              <p className="text-gray-700">NT$ 100</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">NT$ {
                  (cartItems.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0) + 100)
                }</p>
              </div>
            </div>
            <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
              Check out
            </button>
          </div>
        </div>
      </div>
    </>
  );
}