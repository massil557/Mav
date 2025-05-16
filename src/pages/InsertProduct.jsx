import { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import InputField from '../components/InputField'
import CostumeButton from '../components/CostumeButton'
import ImageUploadField from '../components/ImageUploadField'
import { GlobalContext } from '../GlobalProvider'

const InsertProduct = () => {
  const { user, setUser } = useContext(GlobalContext)

  const [imageColorNumber, setImageColorNumber] = useState([])
  const [totalQuantity, setTotalQuantity] = useState(0)
  const [product, setProduct] = useState({
    idMagazine: JSON.parse(localStorage.getItem('user'))._id,
    name: '',
    brand: '',
    price: '',
    details: '',
    category: 'Fashion',
    subcategory: 'shirts',
    gender: 'men',
    checkedS: false,
    checkedM: false,
    checkedL: false,
    checkedXL: false,
    available: [],
  })

  console.log(product)

  const handelSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    if (imageColorNumber) {
      for (let index = 0; index < imageColorNumber.length; index++) {
        formData.append('images', imageColorNumber[index].image)
      }
    }

    try {
      const response = await axios.post(
        'http://localhost:3000/api/products',
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      )

      console.log('Upload success:', response.data)
      const detailedPictures = imageColorNumber.map((element, index) => {
        return {
          color: element.color,
          quantity: element.number,
          path: `http://localhost:3000/uploads/${response.data[index].filename}`,
        }
      })

      // setProduct((prev) => {
      //   return { ...prev, available: detailedPictures }
      // })
      const updatedProduct = { ...product, available: detailedPictures }

      setProduct(updatedProduct)

      const answer = await axios.post(
        'http://localhost:3000/api/products/details',
        {
          updatedProduct,
        }
      )
      console.log(answer.data)

      console.log(product)
    } catch (error) {
      console.error('Upload failed:', error)
    }
  }

  return (
    <div className=" w-[450px] min-h-[450px]   ">
      <h1 className=" p-5 text-3xl font-poppins-semibold text-center">
        insert your product details
      </h1>
      <form onSubmit={handelSubmit}>
        <div className=" w-full flex justify-center">
          <InputField
            placeholder={'name'}
            styles={
              'w-[350px] h-[40px] mt-[30px] rounded-[15px]  p-4 focus:outline-none  bg-gray-200 text-start  font-poppins-regular text-md'
            }
            type={'text'}
            value={product.name}
            setValue={(e) => {
              setProduct({ ...product, name: e.target.value })
            }}
          />
        </div>
        <div className=" w-full flex justify-center">
          <InputField
            placeholder={'brand'}
            styles={
              'w-[350px] h-[40px] mt-[30px] rounded-[15px]  p-4 focus:outline-none  bg-gray-200 text-start  font-poppins-regular text-md'
            }
            type={'text'}
            value={product.brand}
            setValue={(e) => {
              setProduct({ ...product, brand: e.target.value })
            }}
          />
        </div>
        <div className=" w-full flex justify-center">
          <InputField
            placeholder={'price'}
            styles={
              'w-[350px] h-[40px] mt-[30px] rounded-[15px]  p-4 focus:outline-none  bg-gray-200 text-start  font-poppins-regular text-md'
            }
            type={'number'}
            value={product.price}
            setValue={(e) => {
              setProduct({ ...product, price: e.target.value })
            }}
          />
        </div>

        <div className=" w-full flex justify-center ">
          <select
            className="w-[350px] h-[40px] mt-[30px] pl-4 rounded-[15px]   focus:outline-none  bg-gray-200 text-start  font-poppins-regular text-md"
            value={product.category}
            onChange={(e) => {
              setProduct({ ...product, category: e.target.value })
            }}
          >
            <option value="Fashion">Fashion & Style</option>
            <option value="Beauty">Beauty & Care</option>
            <option value="Fragrances">Fragrances</option>
            <option value="Accessories">Accessories</option>
          </select>
        </div>

        <div className="w-full flex justify-center">
          {/* <select
            className="w-[350px] h-[40px] mt-[30px] pl-4 rounded-[15px] focus:outline-none bg-gray-200 text-start font-poppins-regular text-md"
            value={product.subcategory}
            onChange={(e) => {
              setProduct({ ...product, subcategory: e.target.value })
            }}
          >
            {product.category === 'Fashion' && (
              <>
                <option value="shirts">Shirts</option>
                <option value="pants">Pants</option>
                <option value="suits">Suits</option>
                <option value="shoes">Shoes</option>
              </>
            )}
            {product.category === 'Beauty' && (
              <>
                <option value="makeup">Make Up</option>
                <option value="selfcare">Self Care</option>
              </>
            )}
            {product.category === 'Fragrances' && (
              <option value="fragrances">Fragrances</option>
            )}
            {product.category === 'Accessories' && (
              <>
                <option value="watches">Watches</option>
                <option value="hairclipper">Hair clipper</option>
              </>
            )}
          </select> */}
          <select
            className="w-[350px] h-[40px] mt-[30px] pl-4 rounded-[15px] focus:outline-none bg-gray-200 text-start font-poppins-regular text-md"
            value={product.subcategory}
            onChange={(e) => {
              setProduct({ ...product, subcategory: e.target.value })
            }}
          >
            {/* Default selectable option */}
            <option value="">Select a subcategory</option>

            {/* Fashion options */}
            {product.category === 'Fashion' && (
              <>
                <option value="shirts">Shirts</option>
                <option value="pants">Pants</option>
                <option value="suits">Suits</option>
                <option value="shoes">Shoes</option>
              </>
            )}

            {/* Beauty options */}
            {product.category === 'Beauty' && (
              <>
                <option value="makeup">Make Up</option>
                <option value="selfcare">Self Care</option>
              </>
            )}

            {/* Fragrances option */}
            {product.category === 'Fragrances' && (
              <option value="fragrances">Fragrances</option>
            )}

            {/* Accessories options */}
            {product.category === 'Accessories' && (
              <>
                <option value="watches">Watches</option>
                <option value="hairclipper">Hair Clipper</option>
              </>
            )}
          </select>
        </div>

        <div className=" w-full flex justify-center ">
          <select
            className="w-[350px] h-[40px] mt-[30px] pl-4 rounded-[15px]   focus:outline-none  bg-gray-200 text-start  font-poppins-regular text-md"
            value={product.gender}
            onChange={(e) => {
              setProduct({ ...product, gender: e.target.value })
            }}
          >
            <option value="men">men</option>
            <option value="women">women</option>
            <option value="both">both</option>
          </select>
        </div>
        <div className=" w-full flex justify-center">
          <InputField
            placeholder={'any extra details'}
            styles={
              'w-[350px] h-[40px] mt-[30px] rounded-[15px]  p-4 focus:outline-none  bg-gray-200 text-start  font-poppins-regular text-md'
            }
            type={'text'}
            value={product.details}
            setValue={(e) => {
              setProduct({ ...product, details: e.target.value })
            }}
          />
        </div>
        {product.category === 'Fashion' && (
          <div className="w-full flex justify-center text-gray-500">
            <div className="w-[350px] mt-[30px] bg-gray-200 p-4 rounded-[15px]">
              <p className="font-poppins-regular text-md mb-2">
                Available Sizes:
              </p>
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    value="S"
                    className="mr-2"
                    checked={product.checkedS}
                    onChange={(e) => {
                      setProduct({ ...product, checkedS: e.target.checked })
                    }}
                  />
                  <span className="font-poppins-regular text-md">
                    Small (S)
                  </span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    value="M"
                    className="mr-2"
                    checked={product.checkedM}
                    onChange={(e) => {
                      setProduct({ ...product, checkedM: e.target.checked })
                    }}
                  />
                  <span className="font-poppins-regular text-md">
                    Medium (M)
                  </span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    value="L"
                    className="mr-2"
                    checked={product.checkedL}
                    onChange={(e) => {
                      setProduct({ ...product, checkedL: e.target.checked })
                    }}
                  />
                  <span className="font-poppins-regular text-md">
                    Large (L)
                  </span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    value="XL"
                    className="mr-2"
                    checked={product.checkedXL}
                    onChange={(e) => {
                      setProduct({ ...product, checkedXL: e.target.checked })
                    }}
                  />
                  <span className="font-poppins-regular text-md">
                    Extra Large (XL)
                  </span>
                </label>
              </div>
            </div>
          </div>
        )}

        <div className="w-full flex justify-center">
          <ImageUploadField
            imageColorNumber={imageColorNumber}
            setImageColorNumber={setImageColorNumber}
            setTotalQuantity={setTotalQuantity}
          />
        </div>
        <div className="w-full flex justify-center text-gray-500 mt-4">
          <p>Total Quantity: {totalQuantity}</p>
        </div>
        <div className=" w-full flex justify-center">
          <CostumeButton
            submit={true}
            text={'submit'}
            w={'300px'}
            hg={'35px'}
            black={true}
            styles={'mt-[30px]'}
          />
        </div>
      </form>
    </div>
  )
}

export default InsertProduct
