import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InputField from '../components/InputField'
import CostumeButton from '../components/CostumeButton'
import ImageUploadField from '../components/ImageUploadField'
import axios from 'axios'
import { GlobalContext } from '../GlobalProvider'

const SignUp = () => {
  const { user, setUser } = useContext(GlobalContext)
  const navigate = useNavigate()
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
    businessName: '',
    accountHolderName: '',
    bankAccountNumber: '',
    bankRoutingNumber: '',
    taxId: '',
  })

  const [errors, setErrors] = useState({
    email: false,
    phone: false,
  })

  const validatePhoneNumber = (phone) => {
    const algerianPhoneRegex = /^(?:\+213|0)(5|6|7)\d{8}$/
    return algerianPhoneRegex.test(phone)
  }

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
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

    if (userInfo.accountType === 'magazine') {
      if (!userInfo.businessName || userInfo.businessName.length < 3) {
        alert('Please enter a valid business name (at least 3 characters).')
        return
      }
      if (
        !userInfo.accountHolderName ||
        userInfo.accountHolderName.length < 3
      ) {
        alert(
          'Please enter a valid account holder name (at least 3 characters).'
        )
        return
      }
      if (
        !userInfo.bankAccountNumber ||
        !/^\d{10,20}$/.test(userInfo.bankAccountNumber)
      ) {
        alert(
          'Please enter a valid bank account number (10 to 20 digits only).'
        )
        return
      }
      if (
        !userInfo.bankRoutingNumber ||
        !/^\d{9}$/.test(userInfo.bankRoutingNumber)
      ) {
        alert('Please enter a valid bank routing number (9 digits).')
        return
      }
      if (!userInfo.taxId || userInfo.taxId.length < 5) {
        alert(
          'Please enter a valid tax identification number (at least 5 characters).'
        )
        return
      }
    }
    let clientInfo
    if (userInfo.accountType === 'client') {
      const { email, phone, username, address, password, sex, accountType } =
        userInfo
      clientInfo = {
        email,
        phone,
        username,
        address,
        password,
        sex,
        accountType,
      }
      try {
        const response = await axios.post(
          'http://localhost:3000/client/signup',
          clientInfo
        )

        alert('Sign up successful!')
        setUserInfo({
          accountType: 'client',
          email: '',
          phone: '',
          username: '',
          password: '',
          confirmPassword: '',
          sex: 'male',
          address: '',
          product: 'men',

          businessName: '',
          accountHolderName: '',
          bankAccountNumber: '',
          bankRoutingNumber: '',
          taxId: '',
        })
        const { accessToken, refreshToken, savedUser } = response.data
        console.log(savedUser)
        localStorage.setItem('accessToken', accessToken)
        localStorage.setItem('refreshToken', refreshToken)
        localStorage.setItem('user', JSON.stringify(savedUser))

        setUser(savedUser)

        navigate('/')
      } catch (error) {
        console.error('Error:', error)
        alert('An error occurred during sign up.')
      }

      // Proceed with form submission logic
      console.log('Form submitted successfully:', userInfo)
    } else {
      const {
        email,
        phone,
        username,
        address,
        product,
        password,
        sex,
        accountType,
        businessName,
        accountHolderName,
        bankAccountNumber,
        bankRoutingNumber,
        taxId,
      } = userInfo

      clientInfo = {
        email,
        phone,
        username,
        address,
        product,
        password,
        sex,
        accountType,
        businessName,
        accountHolderName,
        bankAccountNumber,
        bankRoutingNumber,
        taxId,
      }
      try {
        await axios.post(
          'http://localhost:3000/magazine/inscription',
          clientInfo
        )
        setUserInfo({
          accountType: 'client',
          email: '',
          phone: '',
          username: '',
          password: '',
          confirmPassword: '',
          sex: 'male',
          address: '',
          product: 'men',
          businessName: '',
          accountHolderName: '',
          bankAccountNumber: '',
          bankRoutingNumber: '',
          taxId: '',
        })
        navigate('/')
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <div className="min-h-screen min-w-full  flex justify-center items-center ">
      <div className=" rounded-[10px] ">
        <div className=" w-[450px] min-h-[450px]   ">
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

                <div className="w-full flex justify-center">
                  <InputField
                    placeholder={'Business Name'}
                    styles={
                      'w-[350px] h-[40px] mt-[30px] rounded-[15px] p-4 focus:outline-none bg-gray-200 text-start font-poppins-regular text-md'
                    }
                    type={'text'}
                    value={userInfo.businessName || ''}
                    setValue={(e) => {
                      setUserInfo({ ...userInfo, businessName: e.target.value })
                    }}
                  />
                </div>
                <div className="w-full flex justify-center">
                  <InputField
                    placeholder={'Account Holder Name'}
                    styles={
                      'w-[350px] h-[40px] mt-[30px] rounded-[15px] p-4 focus:outline-none bg-gray-200 text-start font-poppins-regular text-md'
                    }
                    type={'text'}
                    value={userInfo.accountHolderName || ''}
                    setValue={(e) => {
                      setUserInfo({
                        ...userInfo,
                        accountHolderName: e.target.value,
                      })
                    }}
                  />
                </div>
                <div className="w-full flex justify-center">
                  <InputField
                    placeholder={'Bank Account Number'}
                    styles={
                      'w-[350px] h-[40px] mt-[30px] rounded-[15px] p-4 focus:outline-none bg-gray-200 text-start font-poppins-regular text-md'
                    }
                    type={'text'}
                    value={userInfo.bankAccountNumber || ''}
                    setValue={(e) => {
                      setUserInfo({
                        ...userInfo,
                        bankAccountNumber: e.target.value,
                      })
                    }}
                  />
                </div>
                <div className="w-full flex justify-center">
                  <InputField
                    placeholder={'Bank Routing Number'}
                    styles={
                      'w-[350px] h-[40px] mt-[30px] rounded-[15px] p-4 focus:outline-none bg-gray-200 text-start font-poppins-regular text-md'
                    }
                    type={'text'}
                    value={userInfo.bankRoutingNumber || ''}
                    setValue={(e) => {
                      setUserInfo({
                        ...userInfo,
                        bankRoutingNumber: e.target.value,
                      })
                    }}
                  />
                </div>
                <div className="w-full flex justify-center">
                  <InputField
                    placeholder={'Tax Identification Number (TIN)'}
                    styles={
                      'w-[350px] h-[40px] mt-[30px] rounded-[15px] p-4 focus:outline-none bg-gray-200 text-start font-poppins-regular text-md'
                    }
                    type={'text'}
                    value={userInfo.taxId || ''}
                    setValue={(e) => {
                      setUserInfo({ ...userInfo, taxId: e.target.value })
                    }}
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
