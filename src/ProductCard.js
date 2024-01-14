const ProductCard = ({ product }) => {
    return (
      <div className="product-card">
        <img src={product.imageUrl} alt={product.name} className="product-image" />
        <h3>{product.name}</h3>
        <p>Price: ${product.price}</p>
        <p>Rating: {product.rating}</p>
        {/* Add more product details here */}
      </div>
    );
  };
  
  export default ProductCard;
  