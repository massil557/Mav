import React, { useState } from 'react'

const ImageUploadField = ({ value, setValue }) => {
  const [isDragging, setIsDragging] = useState(false)

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setValue(file)
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
    const file = e.dataTransfer.files[0]
    if (file) {
      setValue(file)
    }
  }

  return (
    <div
      className={`relative w-[350px] h-[40px] mt-[30px] cursor-pointer rounded-[15px] ${
        isDragging ? 'bg-blue-100' : 'bg-gray-200'
      }`}
      onClick={() => document.getElementById('image-upload-input').click()} // Déclenche un clic sur l'input
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input
        id="image-upload-input"
        type="file"
        accept="image/*"
        className="opacity-0 absolute inset-0 cursor-pointer"
        onChange={handleFileChange}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <i className="fa-solid fa-upload text-gray-500 mr-2"></i>
        <span className="font-poppins-regular text-md text-gray-500">
          {value ? value.name : 'Drag & drop or click to upload'}
        </span>
      </div>
    </div>
  )
}

export default ImageUploadField
