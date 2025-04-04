import { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'
const NewProducts = () => {
  const [result, setResult] = useState(null)
  useEffect(() => {
    const Products = async () => {
      try {
        const NewProducts = await axios.get(
          `http://localhost:3000/api/NewProducts`
        )
        console.log(NewProducts)
        setResult(NewProducts.data)
      } catch (error) {}
    }
    Products()
  }, [])
  return (
    result && (
      <div className="grid grid-cols-5 m-auto min-w-[80vw]">
        {result.map((element) => {
          return (
            <Card
              id={element._id}
              key={element._id}
              img={element.available[0].path}
              name={element.name}
              price={element.price}
              rated={element.rating}
              isOnSale={false}
              cards={result}
              setCards={setResult}
              admin={true}
            />
          )
        })}
      </div>
    )
  )
}

export default NewProducts
