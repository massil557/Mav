import React, { useState, useEffect } from 'react'

const ImageUploadField = ({
  imageColorNumber,
  setImageColorNumber,
  setTotalQuantity,
}) => {
  const [isDragging, setIsDragging] = useState(false)

  useEffect(() => {
    const total = imageColorNumber.reduce(
      (sum, item) => sum + (item.number || 0),
      0
    )
    setTotalQuantity(total)
  }, [imageColorNumber, setTotalQuantity])

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files)
    if (files.length > 0) {
      const newItems = files.map((file) => ({
        image: file,
        color: null,
        number: 0,
      }))

      setImageColorNumber((prev) => [...prev, ...newItems])
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)
    const files = Array.from(e.dataTransfer.files)
    if (files.length > 0) {
      const newItems = files.map((file) => ({
        image: file,
        color: null,
        number: 0,
      }))

      setImageColorNumber((prev) => [...prev, ...newItems])
    }
  }

  const handleColorChange = (index, color) => {
    const updatedItems = [...imageColorNumber]
    updatedItems[index].color = color
    setImageColorNumber(updatedItems)
  }

  const handleNumberChange = (index, number) => {
    const updatedItems = [...imageColorNumber]
    updatedItems[index].number = parseInt(number, 10) || 0
    setImageColorNumber(updatedItems)
  }

  const removeImage = (index) => {
    setImageColorNumber((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <div>
      {/* Upload Field */}
      <div
        className={`relative w-[350px] h-[80px] mt-[30px] cursor-pointer rounded-[15px] ${
          isDragging ? 'bg-blue-100' : 'bg-gray-200'
        }`}
        onClick={() => document.getElementById('image-upload-input').click()}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          id="image-upload-input"
          type="file"
          accept="image/*"
          multiple
          className="opacity-0 absolute inset-0 cursor-pointer"
          onChange={handleFileChange}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <i className="fa-solid fa-upload text-gray-500 mr-2"></i>
          <span className="font-poppins-regular text-md text-gray-500">
            Drag & drop or click to upload
          </span>
        </div>
      </div>

      {/* Thumbnails with Color and Quantity Selection */}
      <div className="mt-[20px] grid grid-cols-3 gap-4">
        {imageColorNumber.map((item, index) => (
          <div
            key={index}
            className="relative w-[80px] h-[80px] rounded-[10px] bg-gray-200 overflow-hidden"
          >
            <img
              src={URL.createObjectURL(item.image)}
              alt={`Uploaded ${index}`}
              className="w-full h-full object-cover"
            />
            <button
              type="button"
              onClick={() => removeImage(index)}
              className="absolute top-1 right-1 bg-red-500 text-white w-[20px] h-[20px] rounded-full flex items-center justify-center text-xs"
            >
              &times;
            </button>
            <input
              type="color"
              value={item.color || '#000000'}
              onChange={(e) => handleColorChange(index, e.target.value)}
              className="absolute bottom-1 left-1 w-[20px] h-[20px] rounded-full border border-gray-300 cursor-pointer"
            />
            <input
              type="number"
              value={item.number || 0}
              onChange={(e) => handleNumberChange(index, e.target.value)}
              className="absolute bottom-1 right-1 w-[40px] h-[20px] text-center border border-gray-300 rounded"
              min="0"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageUploadField
