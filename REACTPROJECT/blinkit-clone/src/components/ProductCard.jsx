function ProductCard({ product, addToCart }) {
  return (
    <div className="card">
      <h2>{product.img}</h2>
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;