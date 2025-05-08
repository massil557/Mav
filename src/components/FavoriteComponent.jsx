import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card'

export const FavoriteComponent = ({ user }) => {
  const [result, setResult] = useState(null)
  const id = user._id

  useEffect(() => {
    const getFavorite = async (id) => {
      try {
        const fProductsIds = await axios.get(
          `http://localhost:3000/api/favoriteProduct/${id}`
        )
        const fProducts = await axios.get(
          `http://localhost:3000/api/favoriteProductBulk/${JSON.stringify(
            fProductsIds.data.favorite
          )}`
        )
        console.log(fProducts.data)

        setResult(fProducts.data.fProducts)
      } catch (error) {}
    }
    getFavorite(id)
  }, [])

  return (
    result && (
      <div className="grid grid-cols-4  ">
        {result.map((element) => {
          return (
            <Card
              id={element._id}
              key={element._id}
              img={element.available[0].path}
              name={element.name}
              price={element.price}
              rated={element.rating}
              isOnSale={element.isOnSale}
              favorite={true}
            />
          )
        })}
      </div>
    )
  )
}
