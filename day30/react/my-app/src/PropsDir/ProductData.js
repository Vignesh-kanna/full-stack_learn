import React from 'react'

const products = [
  {
    id: 1,
    name: 'Laptop',
    price: 59999,
    description: 'A high performance laptop.',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=facearea&w=100&h=100'
  },
  {
    id: 2,
    name: 'Smartphone',
    price: 29999,
    description: 'Latest model smartphone.',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=facearea&w=100&h=100'
  },
  {
    id: 3,
    name: 'Headphones',
    price: 3999,
    description: 'Noise cancelling headphones.',
    image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=100&h=100'
  },
];

const ProductData = () => {
  return (
    <div>
      <h2>Product List</h2>
      <table border="1" cellPadding="8" cellSpacing="0" style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price (₹)</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td><img src={product.image} alt={product.name} width="60" height="60" style={{objectFit: 'cover', borderRadius: '8px'}} /></td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductData
