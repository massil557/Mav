import { useState } from 'react'
import InputField from '../components/InputField'
import CostumeButton from '../components/CostumeButton'
import ImageUploadField from '../components/ImageUploadField'
import axios from 'axios'

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    accountType: 'client',
    email: '',
    phone: '',
    username: '',
    password: '',
    confirmPassword: '',
    sex: 'male',
    address: '',
    product: 'men',
  })

  const [errors, setErrors] = useState({
    email: false,
    phone: false,
  })

  const validatePhoneNumber = (phone) => {
    const algerianPhoneRegex = /^(?:\+213|0)(5|6|7)\d{8}$/ // Matches +213 or 0 followed by 9 digits starting with 5, 6, or 7
    return algerianPhoneRegex.test(phone)
  }

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // Basic email validation regex
    return emailRegex.test(email)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const isEmailValid = validateEmail(userInfo.email)
    const isPhoneValid = validatePhoneNumber(userInfo.phone)

    setErrors({
      email: !isEmailValid,
      phone: !isPhoneValid,
    })

    if (!isEmailValid || !isPhoneValid) {
      if (!isEmailValid) alert('Please enter a valid email address.')
      if (!isPhoneValid) alert('Please enter a valid phone number.')
      return
    }
    if (userInfo.password !== userInfo.confirmPassword) {
      alert('passwords do not match')
      return
    }
    if (!userInfo.username) {
      alert('Please enter a username')
      return
    }
    if (!userInfo.address) {
      alert('Please enter your address')
      return
    }
    if (userInfo.accountType === 'client') {
      const { email, phone, username, address, password, sex } = userInfo
      const clientInfo = { email, phone, username, address, password, sex }
      console.log(clientInfo)
      try {
        const response = await axios.post(
          'http://localhost:3000/client/signup',
          clientInfo
        )
        console.log('Response:', response.data)
        alert('Sign up successful!')
      } catch (error) {
        console.error('Error:', error)
        alert('An error occurred during sign up.')
      }
    }

    // Proceed with form submission logic
    console.log('Form submitted successfully:', userInfo)
  }

  return (
    <div className="min-h-screen min-w-full  flex justify-center items-center ">
      <div className=" rounded-[10px] ">
        <div className=" w-[450px] h-[450px]   ">
          <h1 className=" p-5 text-3xl font-poppins-semibold text-center">
            Sign Up
          </h1>
          <form onSubmit={handleSubmit}>
            <div className=" w-full flex justify-center ">
              <select
                className="w-[350px] h-[40px] mt-[30px] pl-4 rounded-[15px]   focus:outline-none  bg-gray-200 text-start  font-poppins-regular text-md"
                value={userInfo.accountType}
                onChange={(e) => {
                  setUserInfo({ ...userInfo, accountType: e.target.value })
                }}
              >
                <option value="client">Client Account</option>
                <option value="magazine">magazine Account</option>
              </select>
            </div>
            <div className=" w-full flex justify-center">
              <InputField
                placeholder={'Email'}
                styles={
                  'w-[350px] h-[40px] mt-[30px] rounded-[15px]  p-4 focus:outline-none  bg-gray-200 text-start  font-poppins-regular text-md'
                }
                type={'email'}
                value={userInfo.email}
                setValue={(e) => {
                  setUserInfo({ ...userInfo, email: e.target.value })
                }}
              />
            </div>
            <div className=" w-full flex justify-center">
              <InputField
                placeholder={'Phone Number'}
                styles={
                  'w-[350px] h-[40px] mt-[30px] rounded-[15px]  p-4 focus:outline-none  bg-gray-200 text-start  font-poppins-regular text-md'
                }
                type={'text'}
                value={userInfo.phone}
                setValue={(e) => {
                  setUserInfo({ ...userInfo, phone: e.target.value })
                }}
              />
            </div>
            <div className=" w-full flex justify-center">
              <InputField
                placeholder={'Username'}
                styles={
                  'w-[350px] h-[40px] mt-[30px] rounded-[15px]  p-4 focus:outline-none  bg-gray-200 text-start  font-poppins-regular text-md'
                }
                type={'text'}
                value={userInfo.username}
                setValue={(e) => {
                  setUserInfo({ ...userInfo, username: e.target.value })
                }}
              />
            </div>

            <div className=" w-full flex justify-center">
              <InputField
                placeholder={'Password'}
                styles={
                  'w-[350px] h-[40px] mt-[30px] rounded-[15px]  p-4 focus:outline-none  bg-gray-200 text-start  font-poppins-regular text-md'
                }
                type={'password'}
                value={userInfo.password}
                setValue={(e) => {
                  setUserInfo({ ...userInfo, password: e.target.value })
                }}
              />
            </div>
            <div className=" w-full flex justify-center">
              <InputField
                placeholder={'Confirm Password'}
                styles={
                  'w-[350px] h-[40px] mt-[30px] rounded-[15px]  p-4 focus:outline-none  bg-gray-200 text-start  font-poppins-regular text-md'
                }
                type={'password'}
                value={userInfo.confirmPassword}
                setValue={(e) => {
                  setUserInfo({ ...userInfo, confirmPassword: e.target.value })
                }}
              />
            </div>

            <div className=" w-full flex justify-center ">
              <select
                className="w-[350px] h-[40px] mt-[30px] pl-4 rounded-[15px]   focus:outline-none  bg-gray-200 text-start  font-poppins-regular text-md "
                placeholder="Sex"
                value={userInfo.sex}
                onChange={(e) => {
                  setUserInfo({ ...userInfo, sex: e.target.value })
                }}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className=" w-full flex justify-center">
              <InputField
                placeholder={'address'}
                styles={
                  'w-[350px] h-[40px] mt-[30px] rounded-[15px]  p-4 focus:outline-none  bg-gray-200 text-start  font-poppins-regular text-md'
                }
                type={'text'}
                value={userInfo.address}
                setValue={(e) => {
                  setUserInfo({ ...userInfo, address: e.target.value })
                }}
              />
            </div>

            {userInfo.accountType === 'magazine' ? (
              <>
                <div className="w-full flex justify-center">
                  <select
                    className="w-[350px] h-[40px] mt-[30px] pl-4 rounded-[15px]   focus:outline-none  bg-gray-200 text-start  font-poppins-regular text-md "
                    value={userInfo.product}
                    onChange={(e) => {
                      setUserInfo({ ...userInfo, product: e.target.value })
                    }}
                  >
                    <option value="men">products for men</option>
                    <option value="women">products for women</option>
                    <option value="both">products for both genders</option>
                  </select>
                </div>
                <div className=" w-full flex justify-center mt-[30px] relative">
                  <p className="font-poppins-regular absolute left-[60px]">
                    upload a picture of your products
                  </p>
                </div>
                <div className="w-full flex justify-center">
                  <ImageUploadField
                    styles="w-[350px] h-[40px] rounded-[15px] focus:outline-none bg-gray-200 text-start font-poppins-regular text-md"
                    value={userInfo.productImage}
                    setValue={(file) =>
                      setUserInfo({ ...userInfo, productImage: file })
                    }
                  />
                </div>
              </>
            ) : (
              <></>
            )}
            <div className=" w-full flex justify-center">
              <CostumeButton
                submit={true}
                text={'Sign Up'}
                w={'300px'}
                hg={'35px'}
                black={true}
                styles={'mt-[30px]'}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
