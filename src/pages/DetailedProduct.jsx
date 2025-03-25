import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CommentSection from '../components/CommentSection'

const DetailedProduct = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [selectedColor, setSelectedColor] = useState(null) // Track selected color
  const [rating, setRating] = useState(0) // State for product rating
  const [zoomed, setZoomed] = useState(false) // State for closer look

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await axios.get(
          `http://localhost:3000/api/product/details/${id}`
        )
        setProduct(results.data)
      } catch (error) {
        console.error('Error fetching product details:', error)
      }
    }

    fetchData()
  }, [id])

  const handleBuyNow = () => {
    alert('Redirecting to payment gateway...')
  }

  const handleRating = (value) => {
    setRating(value)
    alert(`You rated this product ${value} stars!`)
  }

  if (!product) {
    return <div>Loading...</div>
  }

  return (
    <div className="grid grid-cols-2 gap-8 p-8 pt-[100px]">
      {/* Left Section: Images */}
      <div className="grid grid-cols-[1fr_4fr] gap-4">
        {/* Thumbnail Images */}
        <div className="flex flex-col gap-4">
          {product.available.map((item, index) => (
            <img
              key={index}
              src={item.path}
              alt={`Thumbnail ${index}`}
              className="w-[80px] h-[80px] object-cover cursor-pointer border border-gray-300 rounded"
              onClick={() => setSelectedColor(item)}
            />
          ))}
        </div>

        {/* Main Image */}
        <div
          className={`relative w-full h-[500px] bg-gray-100 rounded overflow-hidden ${
            zoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'
          }`}
          onClick={() => setZoomed(!zoomed)}
        >
          <img
            src={selectedColor ? selectedColor.path : product.available[0].path}
            alt="Main Product"
            className={`w-full h-full object-cover ${
              zoomed ? 'scale-150 transition-transform' : 'scale-100'
            }`}
          />
        </div>
      </div>

      {/* Right Section: Product Details */}
      <div className="grid grid-cols-[3fr_1.5fr] gap-4">
        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600 mt-2">{product.details}</p>
          <p className="text-lg font-semibold mt-4">
            Brand: <span className="text-gray-800">{product.brand}</span>
          </p>
          <p className="text-lg font-semibold mt-2">
            Category: <span className="text-gray-800">{product.category}</span>
          </p>
          <p className="text-lg font-semibold mt-2">
            Gender: <span className="text-gray-800">{product.gender}</span>
          </p>
          <p className="text-lg font-semibold mt-2">
            Price: <span className="text-gray-800">{product.price}DA</span>
          </p>
          {product.category === 'Fashion' && (
            <div className="mt-4">
              <p className="text-lg font-semibold">Available Sizes:</p>
              <div className="flex gap-4 mt-2">
                {product.checkedS && <span className="badge">S</span>}
                {product.checkedM && <span className="badge">M</span>}
                {product.checkedL && <span className="badge">L</span>}
                {product.checkedXL && <span className="badge">XL</span>}
              </div>
            </div>
          )}

          {/* Rating System */}
          <div className="mt-6">
            <p className="text-lg font-semibold">Rate this product:</p>
            <div className="flex gap-2 mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <i
                  key={star}
                  className={`fa-solid fa-star text-2xl cursor-pointer ${
                    star <= rating ? 'text-yellow-500' : 'text-gray-300'
                  }`}
                  onClick={() => handleRating(star)}
                ></i>
              ))}
            </div>
          </div>
        </div>

        {/* Buy Section */}
        <div className="flex flex-col items-center">
          <button
            onClick={handleBuyNow}
            className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Buy Now
          </button>
          <div className="mt-4">
            <p className="text-lg font-semibold">Available Colors:</p>
            <div className="flex gap-2 mt-2">
              {product.available.map((item, index) => (
                <div
                  key={index}
                  className="w-[30px] h-[30px] rounded-full border border-gray-300 cursor-pointer"
                  style={{ backgroundColor: item.color }}
                  onClick={() => setSelectedColor(item)}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Comment Section */}
      <div className="col-span-2 mt-8">
        <CommentSection productId={id} />
      </div>
    </div>
  )
}

export default DetailedProduct
