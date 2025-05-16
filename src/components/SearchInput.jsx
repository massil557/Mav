// import { loop } from '../../assets'
// import InputField from './InputField'
// import { useState } from 'react'
// import axios from 'axios'
// export const SearchInput = () => {
//   const [query, setQuery] = useState('')
//   const [results, setResults] = useState([])
//   const handleSearch = async () => {
//     try {
//       const res = await axios.get(
//         `http://localhost:3000/api/products/search?q=${encodeURIComponent(
//           query
//         )}`
//       )
//       setResults(res.data)
//       console.log('Search results:', res.data)
//     } catch (error) {
//       console.error('Error searching products:', error)
//     }
//   }
//   return (
//     <div
//       className="grid grid-cols-[1fr_8fr]
//     border-0 rounded-2xl gap-5  bg-gray-200"
//     >
//       <div className=" border-black h-[30px]">
//         <img
//           src={loop}
//           alt="Search"
//           className="w-full h-full object-contain cursor-pointer "
//           onClick={handleSearch}
//         />
//       </div>

//       {/* <input
//         type="text"
//         className="w-full h-full  focus:outline-none text-start m-auto font-poppins-regular text-sm"
//         placeholder="search what you're interested in"
//       /> */}
//       <InputField
//         placeholder={"search what you're interested in"}
//         styles={
//           'w-full h-full  focus:outline-none text-start m-auto font-poppins-regular text-sm'
//         }
//         type={'text'}
//         value={query}
//         setValue={(e) => setQuery(e.target.value)}
//       />
//     </div>
//   )
// }

// export default SearchInput

import { loop } from '../../assets'
import InputField from './InputField'
import { useState } from 'react'
import axios from 'axios'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Card from './Card'

export const SearchInput = () => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [showResults, setShowResults] = useState(false)

  const handleSearch = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/api/products/search?q=${encodeURIComponent(
          query
        )}`
      )
      setResults(res.data)
      setShowResults(true)
    } catch (error) {
      console.error('Error searching products:', error)
    }
  }

  const clearResults = () => {
    setShowResults(false)
    setResults([])
  }

  return (
    <div className="relative w-full">
      <div className="grid grid-cols-[1fr_8fr] border-0 rounded-2xl gap-5 bg-gray-200">
        <div className="h-[30px]">
          <img
            src={loop}
            alt="Search"
            className="w-full h-full object-contain cursor-pointer"
            onClick={handleSearch}
          />
        </div>
        <InputField
          placeholder="search what you're interested in"
          styles="w-full h-full focus:outline-none text-start m-auto font-poppins-regular text-sm"
          type="text"
          value={query}
          setValue={(e) => setQuery(e.target.value)}
        />
      </div>

      {showResults && (
        <div className="fixed top-[70px] left-0 w-[100vw] max-h-[70vh] bg-white shadow-lg border-t z-50 p-4 overflow-y-auto">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-md font-semibold">Search Results</h2>
            <button
              onClick={clearResults}
              className="text-gray-600 hover:text-black text-xl"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          {results.length > 0 ? (
            <div className="grid grid-cols-2 gap-4">
              {results.map((element) => {
                return (
                  <Card
                    id={element._id}
                    key={element._id}
                    img={element.available[0].path}
                    name={element.name}
                    price={element.price}
                    rated={element.rating}
                    isOnSale={element.isOnSale}
                  />
                )
              })}
            </div>
          ) : (
            <p className="text-gray-500">No products found.</p>
          )}
        </div>
      )}
    </div>
  )
}

export default SearchInput
