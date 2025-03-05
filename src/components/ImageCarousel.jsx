import { useState } from 'react'
import { DnNormalImage } from './DnormaleImage'
import React from 'react'

const ImageCarousel = ({ images }) => {
  const [Images, setImages] = useState(images)

  return (
    <div className="flex justify-center items-center  overflow-hidden object-contain gap-1 scrollbar-none h-[400px] min-w-[1080px]">
      {Images.map((image, i) => {
        return <DnNormalImage src={image} key={i} />
      })}
    </div>
  )
}
export default ImageCarousel
