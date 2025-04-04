import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { regenerateTokenPut } from '../RegenerateToken'

const MagazineCard = ({ magazine, result, setResult }) => {
  console.log(magazine)
  console.log(result)

  const HandelApprove = async () => {
    try {
      await axios.put(
        `http://localhost:3000/approve/${magazine._id}`,
        { token: localStorage.getItem('refreshToken') },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      )

      setResult((prevResult) =>
        prevResult.filter((element) => element._id !== magazine._id)
      )
    } catch (error) {
      console.log(error)
      if (error.response.status === 403) {
        regenerateTokenPut(`http://localhost:3000/approve/${magazine._id}`)
        setResult((prevResult) =>
          prevResult.filter((element) => element._id !== magazine._id)
        )
      }
    }
  }
  const HandelReject = async () => {
    try {
      await axios.put(
        `http://localhost:3000/reject/${magazine._id}`,
        { token: localStorage.getItem('refreshToken') },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      )

      setResult((prevResult) =>
        prevResult.filter((element) => element._id !== magazine._id)
      )
    } catch (error) {
      console.log(error)

      if (error.response.status === 403) {
        regenerateTokenPut(`http://localhost:3000/reject/${magazine._id}`)
        setResult((prevResult) =>
          prevResult.filter((element) => element._id !== magazine._id)
        )
      }
    }
  }
  const navigate = useNavigate()
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-[300px]">
      <div
        onClick={() => {
          navigate(`/newMagazine/${magazine._id}`)
        }}
      >
        <div className="flex items-center mb-4">
          <i className="fa fa-store text-gray-500 text-2xl mr-4"></i>
          <h2 className="text-xl font-poppins-semibold text-gray-800">
            {magazine.businessName}
          </h2>
        </div>
        <div className="flex items-center">
          <i className="fa fa-user text-gray-500 text-xl mr-4"></i>
          <p className="font-poppins-regular text-gray-700">
            {magazine.username}
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-8 space-x-4">
        <button
          onClick={HandelApprove}
          className="flex w-[100px] items-center justify-center px-2 py-1 bg-green-500 text-white font-poppins-medium rounded-lg shadow-md hover:bg-green-600 transform hover:scale-105 transition duration-300 text-sm"
        >
          <i className="fa fa-check-circle text-sm mr-2"></i>
          Approve
        </button>
        <button
          onClick={HandelReject}
          className="flex items-center w-[100px] justify-center px-2 py-1 bg-red-500 text-white font-poppins-medium rounded-lg shadow-md hover:bg-red-600 transform hover:scale-105 transition duration-300 text-sm"
        >
          <i className="fa fa-times-circle text-sm mr-2"></i>
          Reject
        </button>
      </div>
    </div>
  )
}

export default MagazineCard
