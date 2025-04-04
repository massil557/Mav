import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from './Card'

const ReportedProducts = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getReportedProduct = async () => {
      const result = await axios.get(
        'http://localhost:3000/api/products/reported'
      )

      setProducts(result.data)
    }
    getReportedProduct()
  }, [])

  return (
    <div className="grid grid-cols-5 m-auto min-w-[80vw]">
      {products.map((element) => {
        return (
          <Card
            id={element._id}
            key={element._id}
            img={element.available[0].path}
            name={element.name}
            price={element.price}
            rated={element.rating}
            isOnSale={false}
            reported={true}
            cards={products}
            setCards={setProducts}
          />
        )
      })}
    </div>
  )
}

export default ReportedProducts
