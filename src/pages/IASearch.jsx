import React, { useState } from 'react'
import axios from 'axios'

const IASearch = () => {
  const [image, setImage] = useState(null)
  const [preview, setPreview] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    setImage(file)
    setPreview(URL.createObjectURL(file))
  }

  const handleSearch = async () => {
    if (!image) return alert('Please select an image.')

    const formData = new FormData()
    formData.append('image', image)

    try {
      setLoading(true)
      const res = await axios.post('http://localhost:3000/search', formData)
      setResults(res.data.similarProducts || [])
    } catch (err) {
      console.error(err)
      alert('Error searching similar products')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-10">
        <h1 className="text-3xl font-extrabold text-center mb-8 text-blue-600">
          🔍 AI Product Search
        </h1>

        <div className="flex flex-col items-center space-y-6">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="file:px-4 file:py-2 file:rounded-lg file:border-0 file:text-white file:bg-blue-600 file:hover:bg-blue-700"
          />
          {preview && (
            <img
              src={preview}
              alt="Selected"
              className="w-64 h-64 object-cover rounded-xl shadow-md"
            />
          )}
          <button
            onClick={handleSearch}
            className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition"
          >
            {loading ? 'Searching...' : 'Find Similar Products'}
          </button>
        </div>

        {results.length > 0 && (
          <div className="mt-10">
            <h2 className="text-xl font-bold mb-4 text-gray-700">
              🛍️ Similar Products Found
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {results.map((product) => (
                <div
                  key={product._id}
                  className="bg-white rounded-2xl border shadow hover:shadow-xl transition overflow-hidden"
                >
                  <img
                    src={product.available[0]?.path}
                    alt={product.name}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-lg text-blue-800">
                      {product.name}
                    </h3>
                    <p className="text-gray-600">{product.brand}</p>
                    <p className="text-blue-600 font-semibold mt-2">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default IASearch
