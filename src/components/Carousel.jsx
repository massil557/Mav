import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Card from './Card'
const ProductCarousel = ({ cards }) => {
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  }

  return (
    <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={2500}>
      {cards.map((card) => {
        const image =
          card.available?.[0]?.path || 'https://via.placeholder.com/150'

        return (
          <Card
            id={card._id}
            key={card._id}
            img={card.available[0].path}
            name={card.name}
            price={card.price}
            rated={card.rating}
            isOnSale={card.isOnSale}
          />
        )
      })}
    </Carousel>
  )
}

export default ProductCarousel
