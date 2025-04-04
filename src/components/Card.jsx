import React, { useContext, useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../GlobalProvider'
import axios from 'axios'
import {
  regenerateTokenPost,
  regenerateTokenDelete,
  regenerateTokenGet,
  regenerateTokenPut,
} from '../RegenerateToken'

export const Card = ({
  id,
  img,
  name,
  price = 2000,
  favorite,
  rated = 3,
  isOnSale = true,
  amount = 0.4,
  admin = false,
  setCards,
  cards,
  reported = false,
}) => {
  const { user } = useContext(GlobalContext)
  const navigate = useNavigate()

  const handelApproval = async () => {
    try {
      await axios.put(
        `http://localhost:3000/approveProduct/${id}`,
        { token: localStorage.getItem('refreshToken') },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      )
      const results = cards.filter((element) => {
        return element._id !== id
      })
      setCards(results)
    } catch (error) {
      console.log(error)
      if (error.response.status === 403) {
        regenerateTokenPut(`http://localhost:3000/approveProduct/${id}`)
        const results = cards.filter((element) => {
          return element._id !== id
        })
        setCards(results)
      }
    }
  }
  const handelReject = async () => {
    try {
      await axios.put(
        `http://localhost:3000/rejectedProduct/${id}`,
        { token: localStorage.getItem('refreshToken') },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      )
      const results = cards.filter((element) => {
        return element._id !== id
      })
      setCards(results)
    } catch (error) {
      if (error.response.status === 403) {
        regenerateTokenPut(`http://localhost:3000/rejectedProduct/${id}`)
        const results = cards.filter((element) => {
          return element._id !== id
        })
        setCards(results)
      }
    }
  }

  const handelClick = () => {
    if (admin) {
      navigate(`/productDetailed/${id}`)
    } else {
      navigate(`/product/${id}`)
    }
  }
  const handelFavorite = async () => {
    if (!user) {
      return alert('you have to log in first')
    }
    const userId = user._id
    const newFavorite = id
    if (!isFavorite) {
      console.log(user)
      const result = await axios.put(
        'http://localhost:3000/api/user/favorite',
        { userId, newFavorite }
      )
    } else {
      const result = await axios.put(
        'http://localhost:3000/api/user/rFavorite',
        {
          userId,
          newFavorite,
        }
      )
      console.log('from the delete babe')
    }

    setIsFavorite(!isFavorite)
  }

  const [isFavorite, setIsFavorite] = useState(favorite)
  const [showOptions, setShowOptions] = useState(false)
  const [reportReason, setReportReason] = useState('')
  const reportOptions = ['Fake', 'Misleading', 'Inappropriate', 'Other']

  const handleReport = async () => {
    if (!reportReason) {
      return alert('Please select a reason for reporting.')
    }
    try {
      const user = JSON.parse(localStorage.getItem('user'))
      await axios.post(`http://localhost:3000/api/products/report/${id}`, {
        userId: user._id,
        reason: reportReason,
        details: '',
      })

      alert('Product reported successfully.')
      setShowOptions(false)
      setReportReason('')
    } catch (error) {
      alert(`Error reporting product: ${error.message}`)
    }
  }

  const deleteFunc = async () => {
    try {
      await axios.put(
        `http://localhost:3000/api/products/report/${id}`,
        { token: localStorage.getItem('refreshToken') },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      )
      const results = cards.filter((element) => {
        return element._id !== id
      })
      setCards(results)
    } catch (error) {
      console.log(`we had an error ${error.message}`)
      if (error.response.status === 403) {
        regenerateTokenPut(`http://localhost:3000/api/products/report/${id}`)
        const results = cards.filter((element) => {
          return element._id !== id
        })
        setCards(results)
      }
    }
  }
  const keepFunc = async () => {
    try {
      await axios.post(
        `http://localhost:3000/api/products/report/keep/${id}`,
        { token: localStorage.getItem('refreshToken') },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      )
      const results = cards.filter((element) => {
        return element._id !== id
      })
      setCards(results)
    } catch (error) {
      console.log(`we had an error ${error.message}`)
      if (error.response.status === 403) {
        regenerateTokenPost(
          `http://localhost:3000/api/products/report/keep/${id}`
        )
        const results = cards.filter((element) => {
          return element._id !== id
        })
        setCards(results)
      }
    }
  }

  return (
    <div className="w-[200px] h-[350px] cursor-pointer overflow-hidden font-poppins-regular m-10 relative">
      <div
        className="absolute top-2 right-2 cursor-pointer"
        onClick={() => setShowOptions(!showOptions)}
      >
        <i className="fa-solid fa-ellipsis-vertical"></i>
      </div>
      {showOptions && (
        <div className="absolute top-8 right-2 bg-white shadow-md rounded-md p-2 z-10">
          <p className="text-sm font-semibold mb-2">Report Product</p>
          <select
            value={reportReason}
            onChange={(e) => setReportReason(e.target.value)}
            className="w-full mb-2 p-1 border rounded text-sm"
          >
            <option value="" disabled>
              Select a reason
            </option>
            {reportOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <button
            onClick={handleReport}
            className="w-full bg-red-500 text-white py-1 rounded text-sm hover:bg-red-600 transition"
          >
            Submit
          </button>
        </div>
      )}
      <img
        src={img}
        alt={name}
        className="object contain  m-auto mt-0 mb-0  h-[200px]  object-cover w-[150px] transition-transform duration-300 ease-in-out hover:scale-110"
        onClick={handelClick}
      />
      <div className="w-full mt-3 ml-1">
        <p className=" mb-3"> {name}</p>
        <div>
          {Array.from({ length: rated }).map((_, i) => (
            <i key={i} className="fa-solid fa-star text-yellow-500 "></i>
          ))}
          {Array.from({ length: 5 - rated }).map((_, i) => (
            <i key={i} className="fa-regular fa-star text-yellow-500"></i>
          ))}
        </div>
        {isOnSale ? (
          <div>
            <p className="line-through">{`${price}DA`}</p>
            <div className="flex justify-between  ">
              <p>{`${price - amount * price}DA`}</p>
              <i
                className={
                  isFavorite
                    ? 'fa-solid fa-heart fa-lg text-red-500 mt-[11px] mr-[7px] transition-transform duration-300 ease-in-out hover:scale-130'
                    : 'fa-regular fa-heart fa-lg text-gray-500 mt-[11px] mr-[7px] transition-transform duration-300 ease-in-out hover:scale-130'
                }
                onClick={handelFavorite}
              ></i>
            </div>
          </div>
        ) : (
          <div className="flex justify-between  ">
            <p>{`${price}DA`}</p>
            <i
              className={
                isFavorite
                  ? 'fa-solid fa-heart fa-lg text-red-500 mt-[11px] mr-[7px] transition-transform duration-300 ease-in-out hover:scale-130'
                  : 'fa-regular fa-heart fa-lg text-gray-500 mt-[11px] mr-[7px] transition-transform duration-300 ease-in-out hover:scale-130'
              }
              onClick={handelFavorite}
            ></i>
          </div>
        )}

        {admin && (
          <div className="flex justify-center mt-5 space-x-1">
            <button
              onClick={handelApproval}
              className="flex w-[90px] items-center justify-center px-2 py-1 bg-green-500 text-white font-poppins-medium rounded-lg shadow-md hover:bg-green-600 transform hover:scale-105 transition duration-300 text-sm"
            >
              <i className="fa fa-check-circle text-sm mr-2"></i>
              Approve
            </button>
            <button
              onClick={handelReject}
              className="flex items-center mr-2 w-[90px] justify-center px-2 py-1 bg-red-500 text-white font-poppins-medium rounded-lg shadow-md hover:bg-red-600 transform hover:scale-105 transition duration-300 text-sm"
            >
              <i className="fa fa-times-circle text-sm mr-2"></i>
              Reject
            </button>
          </div>
        )}
        {reported && (
          <div className="flex justify-center mt-5 space-x-1">
            <button
              onClick={keepFunc}
              className="flex w-[90px] items-center justify-center px-2 py-1 bg-green-500 text-white font-poppins-medium rounded-lg shadow-md hover:bg-green-600 transform hover:scale-105 transition duration-300 text-sm"
            >
              <i className="fa fa-check-circle text-sm mr-2"></i>
              Keep
            </button>
            <button
              onClick={deleteFunc}
              className="flex items-center mr-2 w-[90px] justify-center px-2 py-1 bg-red-500 text-white font-poppins-medium rounded-lg shadow-md hover:bg-red-600 transform hover:scale-105 transition duration-300 text-sm"
            >
              <i className="fa fa-times-circle text-sm mr-2"></i>
              delete
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Card
