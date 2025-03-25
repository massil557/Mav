import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'

export const Shop = () => {
  const [products, setProducts] = useState([])
  console.log(products)
  useEffect(() => {
    const fetchProducts = async () => {
      const results = await axios.get('http://localhost:3000/api/getProduct')
      setProducts(results.data)
    }
    fetchProducts()
  }, [])

  return (
    <div className="pt-[100px]">
      <div className="grid grid-cols-5 m-auto">
        {products.map((element) => {
          return (
            <Card
              id={element._id}
              key={element._id}
              img={element.available[0].path}
              name={element.name}
              price={element.price}
              rated={element.rating}
              isOnSale={element.isOnSale}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Shop
