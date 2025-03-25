import React from 'react'
import { useState, useContext } from 'react'
import InputField from '../components/InputField'
import { Link, useNavigate } from 'react-router-dom'
import CostumeButton from '../components/CostumeButton'
import axios from 'axios'
import { GlobalContext } from '../GlobalProvider'
const Login = () => {
  const { user, setUser } = useContext(GlobalContext)

  const [loggedInUser, setLoggedInUser] = useState({
    password: '',
    email: '',
  })
  const navigate = useNavigate()
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handelLogin = async (e) => {
    e.preventDefault()
    const isEmailValid = validateEmail(loggedInUser.email)
    if (!isEmailValid) {
      alert('please enter a valid email')
      return
    }

    try {
      const response = await axios.post(
        'http://localhost:3000/login',
        loggedInUser
      )

      setUser(response.data.result)
      localStorage.setItem('user', JSON.stringify(response.data.result))
      console.log(JSON.parse(localStorage.getItem('user')))

      navigate('/')

      console.log(response.data.result)
      console.log(response.data.accessToken, response.data.refreshToken)
      localStorage.setItem('accessToken', response.data.accessToken)
      localStorage.setItem('refreshToken', response.data.refreshToken)
    } catch (error) {
      console.log(`we had an error ${error}`)
    } finally {
      setLoggedInUser({
        password: '',
        email: '',
      })
    }
  }
  return (
    <div className="min-h-screen min-w-full  flex justify-center items-center">
      <div>
        <div className=" w-[450px] h-[450px] rounded-[10px] ">
          <h1 className=" p-5 text-3xl font-poppins-semibold text-center">
            Login
          </h1>
          <form action=""></form>
          <div className=" w-full flex justify-center">
            <InputField
              placeholder={'Email'}
              styles={
                'w-[350px] h-[40px] mt-[30px] rounded-[15px]  p-4 focus:outline-none  bg-gray-200 text-start  font-poppins-regular text-md'
              }
              type={'email'}
              value={loggedInUser.email}
              setValue={(e) => {
                setLoggedInUser({ ...loggedInUser, email: e.target.value })
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
              value={loggedInUser.password}
              setValue={(e) => {
                setLoggedInUser({ ...loggedInUser, password: e.target.value })
              }}
            />
          </div>
          <div className=" w-full flex justify-center">
            <CostumeButton
              black={true}
              hg={'40px'}
              w={'300px'}
              text={'Login'}
              styles={'mt-[30px]'}
              handel={handelLogin}
              submit={true}
            />
          </div>
          <div className=" w-full flex mt-[30px] justify-center">
            <Link
              to={'/SignUp'}
              className="font-poppins-regular  text-blue-500 text-left"
            >
              Don't have an account? Sign up!
            </Link>
          </div>
          <div className="w-full flex mt-[20px] justify-center">
            <Link className="font-poppins-regular text-blue-500 text-left">
              Forgot your password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
