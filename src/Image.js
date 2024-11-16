// src/Image.js
import React from 'react';
import product from './Product';

function Image() {
  return <img src={product.imageUrl} alt={product.name} style={{ width: '200px', height: 'auto' }} />;
}

export default Image;
