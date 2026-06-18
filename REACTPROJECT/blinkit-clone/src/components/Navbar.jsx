function Navbar({ setSearch, cart }) {
  return (
    <div className="navbar">
      <h2>🛒 Blinkit Clone</h2>

      <input
        placeholder="Search products..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <div>Cart: {cart.length}</div>
    </div>
  );
}

export default Navbar;