import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    increaseQty,
    decreaseQty,
  } = useCart();

  const total = cartItems.reduce(
    (acc, item) =>
      acc + item.quantity * parseInt(item.price.replace(/[^\d]/g, '')),
    0
  );

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in your cart.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                marginBottom: '1rem',
                borderBottom: '1px solid #ccc',
                paddingBottom: '1rem',
              }}
            >
              <h3>{item.name}</h3>
              <p>Price: {item.price}</p>
              <div>
                <button onClick={() => decreaseQty(item.id)}>-</button>
                <span style={{ margin: '0 10px' }}>Qty: {item.quantity}</span>
                <button onClick={() => increaseQty(item.id)}>+</button>
              </div>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <h3>Total: ₹{total}</h3>
          <button onClick={clearCart}>Clear Cart</button>
          <br />
          <Link to="/checkout">
            <button style={{ marginTop: '1rem' }}>Proceed to Checkout</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;
