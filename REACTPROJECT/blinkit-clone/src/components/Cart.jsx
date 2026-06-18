function Cart({ cart, removeFromCart, updateQty }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="cart">
      <h2>Cart</h2>

      {cart.map(item => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>₹{item.price}</p>

          <button onClick={() => updateQty(item.id, "dec")}>-</button>
          <span>{item.qty}</span>
          <button onClick={() => updateQty(item.id, "inc")}>+</button>

          <button onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>
    </div>
  );
}

export default Cart;