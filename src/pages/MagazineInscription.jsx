import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const MagazineInscription = () => {
  // const userInfo = {
  //   username: 'massil',
  //   email: 'mascioul8@gmail.com',
  //   password:
  //     '$argon2id$v=19$m=65536,t=3,p=1$y+04X4xazI+FlYhWwA09YA$2LzkRhDp7w5Es23b…',
  //   phone: '0668057080',
  //   address: 'ighil ouazouge',
  //   sex: 'male',
  //   role: 'magazine',
  //   favorite: [],
  //   product: 'men',
  //   businessName: 'mmmmm',
  //   accountHolderName: 'massil oulhaci',
  //   bankAccountNumber: 1234567890123456800n, // Use BigInt for large numbers
  //   bankRoutingNumber: '123456789',
  //   taxId: '12365',
  //   createdAt: '2025-03-23',
  // }
  const { id } = useParams()
  const [userInfo, setUserInfo] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newMagazine = await axios.get(
          `http://localhost:3000/api/newMagazine/details/${id}`
        )
        setUserInfo(newMagazine.data)
      } catch (error) {
        alert(error)
      }
    }
    fetchData()
  }, [])
  console.log(userInfo)

  return (
    userInfo && (
      <div className="p-8 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-poppins-semibold text-center mb-8">
          Magazine Inscription Details
        </h1>
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <div className="grid grid-cols-1 gap-6">
            <div className="flex items-center">
              <i className="fa fa-user text-gray-500 text-xl mr-4"></i>
              <div>
                <p className="font-poppins-medium text-gray-700">Username</p>
                <p className="font-poppins-regular text-gray-900">
                  {userInfo.username}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <i className="fa fa-envelope text-gray-500 text-xl mr-4"></i>
              <div>
                <p className="font-poppins-medium text-gray-700">Email</p>
                <p className="font-poppins-regular text-gray-900">
                  {userInfo.email}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <i className="fa fa-phone text-gray-500 text-xl mr-4"></i>
              <div>
                <p className="font-poppins-medium text-gray-700">Phone</p>
                <p className="font-poppins-regular text-gray-900">
                  {userInfo.phone}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <i className="fa fa-map-marker text-gray-500 text-xl mr-4"></i>
              <div>
                <p className="font-poppins-medium text-gray-700">Address</p>
                <p className="font-poppins-regular text-gray-900">
                  {userInfo.address}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <i className="fa fa-box text-gray-500 text-xl mr-4"></i>
              <div>
                <p className="font-poppins-medium text-gray-700">Product</p>
                <p className="font-poppins-regular text-gray-900">
                  {userInfo.product}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <i className="fa fa-store text-gray-500 text-xl mr-4"></i>
              <div>
                <p className="font-poppins-medium text-gray-700">
                  Business Name
                </p>
                <p className="font-poppins-regular text-gray-900">
                  {userInfo.businessName}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <i className="fa fa-user-tie text-gray-500 text-xl mr-4"></i>
              <div>
                <p className="font-poppins-medium text-gray-700">
                  Bank Account Holder Name
                </p>
                <p className="font-poppins-regular text-gray-900">
                  {userInfo.accountHolderName}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <i className="fa fa-money-check text-gray-500 text-xl mr-4"></i>
              <div>
                <p className="font-poppins-medium text-gray-700">
                  Bank Account Number
                </p>
                <p className="font-poppins-regular text-gray-900">
                  {userInfo.bankAccountNumber}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <i className="fa fa-university text-gray-500 text-xl mr-4"></i>
              <div>
                <p className="font-poppins-medium text-gray-700">
                  Bank Routing Number
                </p>
                <p className="font-poppins-regular text-gray-900">
                  {userInfo.bankRoutingNumber}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <i className="fa fa-file-alt text-gray-500 text-xl mr-4"></i>
              <div>
                <p className="font-poppins-medium text-gray-700">Tax ID</p>
                <p className="font-poppins-regular text-gray-900">
                  {userInfo.taxId}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <i className="fa fa-calendar text-gray-500 text-xl mr-4"></i>
              <div>
                <p className="font-poppins-medium text-gray-700">
                  Inscription Date
                </p>
                <p className="font-poppins-regular text-gray-900">
                  {userInfo.createdAt}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  )
}

export default MagazineInscription
