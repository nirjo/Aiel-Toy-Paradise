import React from 'react';
import './ProductGrid.css';

import toyCarImg from '../../assets/images/toycar.jpg';
import dollHouseImg from '../../assets/images/dollhouse.jpg';
import puzzleSetImg from '../../assets/images/puzzleset.jpg';
import buildingBlocksImg from '../../assets/images/buildingblocks.jpg';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Toy Car', price: '₹499', image: toyCarImg },
  { id: 2, name: 'Doll House', price: '₹999', image: dollHouseImg },
  { id: 3, name: 'Puzzle Set', price: '₹299', image: puzzleSetImg },
  { id: 4, name: 'Building Blocks', price: '₹799', image: buildingBlocksImg },
];

const ProductGrid = () => {
  return (
    <section className="product-grid">
      <h2>Popular Toys</h2>
      <div className="grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <Link to={`/product/${product.id}`}>
              <button>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
