import { useState, useEffect } from "react";
import productsData from "./data/products";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [products] = useState(productsData);
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(product) {
    const existing = cart.find(item => item.id === product.id);

    if (existing) {
      setCart(
        cart.map(item =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  }

  function removeFromCart(id) {
    setCart(cart.filter(item => item.id !== id));
  }

  function updateQty(id, type) {
    setCart(
      cart.map(item =>
        item.id === id
          ? {
              ...item,
              qty:
                type === "inc"
                  ? item.qty + 1
                  : item.qty - 1,
            }
          : item
      ).filter(item => item.qty > 0)
    );
  }

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Navbar setSearch={setSearch} cart={cart} />

      <div className="container">
        <div className="products">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>

        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
          updateQty={updateQty}
        />
      </div>
    </div>
  );
}

export default App;