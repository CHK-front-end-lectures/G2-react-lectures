import React, { useState } from 'react'

let initialProducts = [
  {
    id: 0,
    name: 'Baklava',
    count: 1,
  },
  {
    id: 1,
    name: 'Cheese',
    count: 3,
  },
  {
    id: 2,
    name: 'Coca cola',
    count: 4,
  }
]

const ProductList = () => {
  const [products, setProducts] = useState(initialProducts);

  const handleIncreaseClick = (id) => {
    const nextProducts = products.map((product) => {
      if(product.id === id) {
        return {
          ...product,
          count: product.count + 1
        };
      } else {
        return product;
      }
    })

    setProducts(nextProducts);
  }

  const handleDecreaseClick = (id) => {
    const nextProducts = products.map((product) => {
      if(product.id === id) {
        return {
          ...product,
          count: product.count - 1
        };
      } else {
        return product;
      }
    })

    setProducts(nextProducts.filter((product) => product.count !== 0))
  }

  return (
    <ul>
      {products.map((product) => { //0, 1, 2 
        return (
          <li key={product.id}>
            {product.name}
            {' '}
            (<b>{product.count}</b>)
            <button onClick={() => handleIncreaseClick(product.id)}>+</button>
            <button onClick={() => handleDecreaseClick(product.id)}>-</button>
          </li>
        )
      })}
    </ul>
  )
}

export default ProductList