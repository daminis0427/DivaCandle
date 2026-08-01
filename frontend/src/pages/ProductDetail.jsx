import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!product) return <div className="container">Loading...</div>;

  return (
    <div className="container" style={{ display: 'flex', gap: '2rem' }}>
      <img src={product.image} alt={product.name} style={{ width: '350px', borderRadius: '8px' }} />
      <div>
        <h2>{product.name}</h2>
        {product.specialOffer && <p style={{ color: '#d9534f' }}>Offer: {product.specialOffer}</p>}
        <h3>${product.discountPercentage > 0 ? product.discountedPrice : product.price}</h3>
        <p>{product.description}</p>
        <button className="btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;