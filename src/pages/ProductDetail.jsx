import React from 'react';
import { useParams } from 'react-router-dom';

const dummyProducts = [
  { id: 1, name: 'Toy Car', price: '₹499', description: 'A cool little toy car.' },
  { id: 2, name: 'Doll House', price: '₹999', description: 'A beautiful doll house.' },
  { id: 3, name: 'Puzzle Set', price: '₹299', description: 'A fun puzzle for kids.' },
  { id: 4, name: 'Building Blocks', price: '₹799', description: 'Creative building blocks.' },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = dummyProducts.find(p => p.id === parseInt(id));

  if (!product) return <p>Product not found</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p style={{ fontWeight: 'bold' }}>{product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
