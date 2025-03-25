import { useState } from 'react'

export const ColorSelector = () => {
  const [selectedColors, setSelectedColors] = useState([])
  const [colorInput, setColorInput] = useState('#000000')

  const addColor = () => {
    if (!selectedColors.includes(colorInput)) {
      setSelectedColors([...selectedColors, colorInput])
    }
  }

  const removeColor = (color) => {
    setSelectedColors(selectedColors.filter((c) => c !== color))
  }
  return (
    <div className="w-full flex justify-center text-gray-500">
      <div className="w-[350px] mt-[30px] bg-gray-200 p-4 rounded-[15px]">
        <p className="font-poppins-regular text-md mb-2">Select Colors:</p>
        <div className="flex items-center gap-4">
          <input
            type="color"
            value={colorInput}
            onChange={(e) => setColorInput(e.target.value)}
            className="w-[40px] h-[40px] rounded-full border border-gray-300 cursor-pointer"
          />
          <button
            type="button"
            onClick={addColor}
            className="bg-black text-white px-4 py-2 rounded-[15px] font-poppins-regular text-md"
          >
            Add Color
          </button>
        </div>
        <div className="mt-4">
          <p className="font-poppins-regular text-md mb-2">Selected Colors:</p>
          <div className="flex flex-wrap gap-4">
            {selectedColors.map((color, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-gray-100 p-2 rounded-[15px]"
              >
                <div
                  className="w-[20px] h-[20px] rounded-full"
                  style={{ backgroundColor: color }}
                ></div>
                <span className="font-poppins-regular text-md">{color}</span>
                <button
                  type="button"
                  onClick={() => removeColor(color)}
                  className="text-red-500 font-poppins-regular text-sm"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
