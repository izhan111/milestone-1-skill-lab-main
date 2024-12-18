import React, { useState } from 'react';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]); // Initialize with an empty array

  const availableItems = [
      { id: 4, name: "Garlic Bread", price: 199 },
      { id: 3, name: "Salad", price: 249 },
    { id: 1, name: "Chicken Biriyani", price: 399 },
    { id: 2, name: "Kunafa", price: 399 },
    { id: 2, name: "Chocolate Cake", price: 199 },
  ];

  const addItemToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        // Increment quantity if item already exists in the cart
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      // Add new item to the cart
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cartItems.length > 0 ? (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <div>
                  <h3>{item.name}</h3>
                  <p>Price: Rs.{item.price}</p>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    min="1"
                  />
                  <button onClick={() => removeItem(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div>
            <h3>Total: Rs.{calculateTotal()}</h3>
            <button onClick={() => alert('Proceeding to payment!')}>Checkout</button>
          </div>
        </>
      ) : (
        <p>Your cart is empty. Add items to get started!</p>
      )}

      <h2>Add Items</h2>
      <ul>
        {availableItems.map((item) => (
          <li key={item.id}>
            <div>
              <h3>{item.name}</h3>
              <p>Price: Rs.{item.price}</p>
              <button onClick={() => addItemToCart(item)}>Add to Cart</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
